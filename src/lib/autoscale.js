const { getMetrics } = require('./metrics');
const { THRESHOLDS, POD_NUMBER, MAPPING } = require('../constant/autoscaler');
const {
  DEPLOYMENT,
  NAMESPACE
} = require('../constant/kubernetes');
const { transpose } = require('./train/util');


// function getThreshold() {
//   let max = {}
//   for (let route of Object.keys(THRESHOLDS)) {
//     const threshold = THRESHOLDS[route].THRESHOLD;
//     for (let service of Object.keys(THRESHOLDS[route].THRESHOLD_PERCENTAGE)) {
//       const percentage = THRESHOLDS[route].THRESHOLD_PERCENTAGE[service];
//       const calculated = threshold * percentage / 100
//       if (!(service in max)) max[service] = [];
//       max[service].push(calculated);
//     }
//   }
//   for (let service of Object.keys(max)) {
//     max[service] = Math.max(...max[service]);
//   }
//   return max;
// };

function getThreshold() {
  return THRESHOLDS;
}

async function autoscale({k8s, models, thresholds, serviceName}) {
  try {
    // const response_time_prediction = 0.6;
    const serviceModels = models[serviceName];
    let upscale = false;
    let downscale = true;
    const { metrics, metricsDict } = await getMetrics(serviceName);
    const predictions = [];

    // check request rate
    const serviceRequestRate = metricsDict[`REQUEST_RATE-${MAPPING[serviceName]}`];
    console.log(`serviceRequestRate ${serviceName}`, serviceRequestRate);

    // check every endpoints
    await Promise.all(Object.keys(serviceModels).map(endpoint => {
      if (serviceRequestRate) {
        const scale_out_threshold = thresholds[serviceName][endpoint].MAX;
        // const scale_down_threshold = scale_out_threshold - 0.2;
        const scale_down_threshold = thresholds[serviceName][endpoint].MIN;
        const { model: svm, batchScaler } = serviceModels[endpoint];
        // scale first
        let metrics_scaled = transpose([metrics])
        metrics_scaled = batchScaler.transform(metrics_scaled)
        metrics_scaled = transpose(metrics_scaled)
        const response_time_prediction = svm.predictOne(metrics_scaled[0]);
        predictions.push(response_time_prediction);
        if (response_time_prediction > scale_out_threshold) {
          upscale = true;
          // return;
        }
        if (response_time_prediction > scale_down_threshold) {
          downscale = false;
        }
      }
    }));
    console.log(`${serviceName} result:`, upscale, downscale, predictions);
    // bandingin response time sama threshold
    if (upscale) {
      await k8s.scaleOut(NAMESPACE, DEPLOYMENT[serviceName].NAME, POD_NUMBER[serviceName].MAX);
    } else if (downscale) {
      await k8s.scaleDown(NAMESPACE, DEPLOYMENT[serviceName].NAME, POD_NUMBER[serviceName].MIN);
    }
  } catch (error) {
    console.log(`${serviceName} autoscaler scheduler`, error);
  }
};

module.exports = {
  getThreshold,
  autoscale
};
