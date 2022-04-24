const { autoscale } = require('../lib/autoscale');

export default async ({ k8sApi, svm, thresholds }) => {
  try {
    await autoscale({k8sApi, svm, thresholds, serviceName: 'CATALOGUE'});
  } catch (error) {
    console.log('scheduler error:', error);
  }
};
