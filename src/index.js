import '@babel/register';
import '@babel/polyfill';
import Scheduler from './workers/scheduler';
import k8sApi from './connection/kubernetes';

const run = require('./lib/train/run');
const { getThreshold } = require('./lib/autoscale');

console.log('STARTING');

const thresholds = getThreshold();
console.log("memes", thresholds);
// const svm = await run();
// Worker
const scheduler = Scheduler({ k8sApi, thresholds });
scheduler.start();
process.on('SIGINT', function () { 
  scheduler.cancel();
});
// run()
// .then(svm => {
// })
// .catch(error => console.log(error));

