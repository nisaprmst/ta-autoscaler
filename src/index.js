import '@babel/register';
import '@babel/polyfill';
import Scheduler from './workers/scheduler';
import k8sApi from './connection/kubernetes';
import Kubernetes from './lib/kubernetes';

const run = require('./lib/train/run');
const { getThreshold } = require('./lib/autoscale');

console.log('STARTING');

const thresholds = getThreshold();
console.log("memes", thresholds);
run()
.then(models => {
  console.log(models);
  const k8s = new Kubernetes({ k8sApi });
  // Worker
  const scheduler = Scheduler({ k8s, models, thresholds });
  scheduler.start();
  process.on('SIGINT', function () { 
    scheduler.cancel();
  });
})
.catch(error => console.log(error));

