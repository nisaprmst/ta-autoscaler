import '@babel/register';
import '@babel/polyfill';
import Scheduler from './workers/scheduler';
import k8sApi from './connection/kubernetes';


console.log('STARTING SCHEDULER');

try {
  // Worker
  const scheduler = Scheduler({ k8sApi });
  scheduler.start();

  process.on('SIGINT', function () { 
    scheduler.cancel();
  });
} catch (error) {
  console.log(error);
}
