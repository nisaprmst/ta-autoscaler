const { autoscale } = require('../lib/autoscale');

export default async ({ k8s, models, thresholds }) => {
  try {
    await autoscale({k8s, models, thresholds, serviceName: 'ORDERS'});
  } catch (error) {
    console.log('scheduler error:', error);
  }
};
