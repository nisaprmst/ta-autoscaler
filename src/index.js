import '@babel/register';
import '@babel/polyfill';
import config from 'config';
import 'reflect-metadata';
import logger from './lib/logger';
import Scheduler from './workers/scheduler';

const axios = setupAxios();

console.log('STARTING SCHEDULER');

/**
 * Normalize a port into a number, string, or false.
 */
const normalizePort = val => {
  const value = parseInt(val, 10);
  if (Number.isNaN(value)) {
    // named pipe
    return val;
  }
  if (value >= 0) {
    // value number
    return value;
  }
  return false;
};

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(config.get('port') || '8080');

/**
 * Event listener for HTTP server "error" event.
 */
const onError = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
  if (error.code === 'EACCES') {
    logger.error(`${bind} requires elevated privileges`);
    process.exit(1);
  } else if (error.code === 'EADDRINUSE') {
    logger.error(`${bind} is already in use`);
    process.exit(1);
  } else {
    throw error;
  }
};
/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = () => {
  console.log(`${new Date().toISOString()} - Server started on port ${port}`);
};

const redisClient = bluebird.promisifyAll(redis(config.get('redis-sentinel')));
const elkClient = elk(config.get('elasticsearch'));

try {
  process.env.BABEL_DISABLE_CACHE = 1;
  // Worker
  const scheduler = Scheduler({ axios, config, redis: redisClient, elk: elkClient });
  scheduler.start();

  // REST api app to listen to a port
  const app = express();
  app.disable('x-powered-by');

  // midlewares
  app.use(helmet());
  app.use(morgan('short'));
  app.use(httpReqLogger);
  app.use(userAgent.express());
  app.use(cors());
  app.options('*', cors());

  // dependencies
  const db = initializeDb(config);
  const dependencies = { db, axios, config, elk: elkClient };
  app.use('/', api(dependencies));

  // not found handler
  app.use((req, res, next) => {
    res.status(404).json({
      method: req.method,
      message: 'Not Found',
      path: req.path
    });
  });

  // Error handlers
  app.use(errorResponseHandler);
  app.use(unexpectedErrorHandler());

  app.set('port', port);
  const server = app.listen(port);
  server.on('listening', onListening);
  server.on('error', onError);
  process.on('SIGINT', () => {
    server.close(() => {
      scheduler.cancel();
      console.log(`${new Date().toISOString()} - Server port ${port} is closed`);
    });
  });
} catch (error) {
  console.log(error);
  logger.error('error', { error });
}
