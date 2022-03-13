import '@babel/register';
import '@babel/polyfill';
import 'reflect-metadata';
import Scheduler from './workers/scheduler';
import CreateK8sApi from './connection/kubernetes';


console.log('STARTING SCHEDULER');

const k8sApi = CreateK8sApi();

try {
  // Worker
  const scheduler = Scheduler({ k8sApi });
  scheduler.start();

  process.on('SIGINT', function () { 
    scheduler.gracefulShutdown()
    .then(() => {
      console.log(`${new Date().toISOString()} - Scheduler is cancelled`);
      process.exit(0);
    })
  });
} catch (error) {
  console.log(error);
}
