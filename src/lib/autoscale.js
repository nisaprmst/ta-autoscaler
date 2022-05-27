const { getMetrics, getResponseTime } = require('./metrics');
const { THRESHOLDS, POD_NUMBER, MAPPING } = require('../constant/autoscaler');
const {
  DEPLOYMENT,
  NAMESPACE
} = require('../constant/kubernetes');
const { transpose } = require('./train/util');

function getThreshold() {
  return THRESHOLDS;
};

async function actualAutoscale({k8s, thresholds, serviceName}) {
  try {
    // initial variables
    const maxPod = POD_NUMBER[serviceName].MAX;
    const minPod = POD_NUMBER[serviceName].MIN;
    const name = DEPLOYMENT[serviceName].NAME;
    const namespace = NAMESPACE;
    const responseTimes = await getResponseTime(serviceName);

    // get current deployment
    const deployment = await k8s.getCurrentDeployment(namespace, name);
    const currentReplicas = deployment.spec.replicas;

    // const currentReplicas = 2;

    // check every endpoints
    let targetReplicas = 0;
    const actualResponseTime = [];
    for (let i = 0; i < responseTimes.length; i += 1) {
      const r = responseTimes[i];
      const scalingThreshold = thresholds[serviceName][r.endpoint];
      const target = Math.ceil(currentReplicas * (r.value / scalingThreshold));
      actualResponseTime.push(r.value);
      // choose highest target
      if (target > targetReplicas) {
        targetReplicas = target;
      }
    }
    console.log(`${serviceName} result:`, currentReplicas, targetReplicas, actualResponseTime);
    await k8s.scale(deployment, name, namespace, maxPod, minPod, targetReplicas);
  } catch (error) {
    console.log(`${serviceName} actualAutoscale`, error);
  }
};

async function autoscale({k8s, models, thresholds, serviceName}) {
  // await predAutoscale({k8s, models, thresholds, serviceName});
  await actualAutoscale({k8s, thresholds, serviceName});
};

async function predAutoscale({k8s, models, thresholds, serviceName}) {
  try {
    // initial variables
    const serviceModels = models[serviceName];
    const predictions = [];
    const maxPod = POD_NUMBER[serviceName].MAX;
    const minPod = POD_NUMBER[serviceName].MIN;
    const name = DEPLOYMENT[serviceName].NAME;
    const namespace = NAMESPACE;
    
    // get metrics
    const { metrics, metricsDict } = await getMetrics(serviceName);

    // check request rate
    const serviceRequestRate = metricsDict[`REQUEST_RATE-${MAPPING[serviceName]}`];
    console.log(`serviceRequestRate ${serviceName}`, serviceRequestRate);

    // get current deployment
    const deployment = await k8s.getCurrentDeployment(namespace, name);
    const currentReplicas = deployment.spec.replicas;

    // check every endpoints
    let targetReplicas = 0;
    const endpoints = Object.keys(serviceModels);
    // await Promise.all(Object.keys(serviceModels).map(endpoint => {
    for (let i = 0; i < endpoints.length; i += 1) {
      const endpoint = endpoints[i];
      if (serviceRequestRate) {
        const scalingThreshold = thresholds[serviceName][endpoint];
        const { model: svm, batchScaler } = serviceModels[endpoint];
        // scale first
        let metricsScaled = transpose([metrics]);
        metricsScaled = batchScaler.transform(metricsScaled);
        metricsScaled = transpose(metricsScaled);
        const responseTimePrediction = svm.predictOne(metricsScaled[0]);
        predictions.push(responseTimePrediction);
        const target = Math.ceil(currentReplicas * (responseTimePrediction / scalingThreshold));
        // choose highest target
        if (target > targetReplicas) {
          targetReplicas = target;
        }
      }
    }
    console.log(`${serviceName} result:`, currentReplicas, targetReplicas, predictions);
    await k8s.scale(deployment, name, namespace, maxPod, minPod, targetReplicas);
  } catch (error) {
    console.log(`${serviceName} autoscaler scheduler`, error);
  }
};

module.exports = {
  getThreshold,
  autoscale
};
