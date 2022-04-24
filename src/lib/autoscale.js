import Kubernetes from '../lib/kubernetes';

const { THRESHOLDS, POD_NUMBER } = require('../constant/autoscaler');
const {
  DEPLOYMENT,
  NAMESPACE
} = require('../constant/kubernetes');


function getThreshold() {
  let max = {}
  for (let route of Object.keys(THRESHOLDS)) {
    const threshold = THRESHOLDS[route].THRESHOLD;
    for (let service of Object.keys(THRESHOLDS[route].THRESHOLD_PERCENTAGE)) {
      const percentage = THRESHOLDS[route].THRESHOLD_PERCENTAGE[service];
      const calculated = threshold * percentage / 100
      if (!(service in max)) max[service] = [];
      max[service].push(calculated);
    }
  }
  for (let service of Object.keys(max)) {
    max[service] = Math.max(...max[service]);
  }
  return max;
};

async function autoscale({k8sApi, svm, thresholds, serviceName}) {
  try {
    // TODO: get response time prediction --> service order aja, order request aja
    const response_time_prediction = 0.6;

    const response_time_threshold = thresholds[serviceName];
    console.log(`response time ${serviceName}:`, response_time_prediction, response_time_threshold);
    // // bandingin response time sama threshold
    if (response_time_prediction > response_time_threshold) {
      const k8s = new Kubernetes({ k8sApi });
      await k8s.scaleOut(NAMESPACE, DEPLOYMENT[serviceName], POD_NUMBER[serviceName].MAX);
    }
  } catch (error) {
    console.log(`${serviceName} autoscaler scheduler`, error);
    // throw error;
  }
};

module.exports = {
  autoscale,
  getThreshold
};
