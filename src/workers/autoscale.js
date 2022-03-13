import Kubernetes from '../lib/kubernetes';

const { THRESHOLD } = require('../constant/autoscaler');
const {
  CLUSTER,
  NAMESPACE,
  REPLICAS
} = require('../constant/kubernetes');

export default async ({ k8sApi }) => {
  try {
    // TODO: get response time prediction --> service order aja, order request aja
    const response_time_prediction = 600;

    // get threshold dari constant --> divariasiin
    const response_time_threshold = THRESHOLD; //500

    console.log('response time prediction :', response_time_prediction);
    console.log('response time threshold  :', response_time_threshold);
    // bandingin response time sama threshold
    if (response_time_prediction > response_time_threshold) {
      // kalau lebih besar scale up
      const k8s = new Kubernetes({ k8sApi });
      await k8s.scale(NAMESPACE, CLUSTER.name, REPLICAS)
    }
  } catch (error) {
    console.log('autoscaler scheduler', error);
  }
};
