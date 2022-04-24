import schedule from 'node-schedule';
import cartAutoscale from './cartAutoscale';
import catalogueAutoscale from './catalogueAutoscale';
import frontendAutoscale from './frontendAutoscale';
import orderAutoscale from './orderAutoscale';
import paymentAutoscale from './paymentAutoscale';
import shippingAutoscale from './shippingAutoscale';
import userAutoscale from './userAutoscale';
import { AUTOSCALER_CRON } from '../constant/autoscaler';

const { scheduleJob, scheduledJobs } = schedule;

export default ({ k8sApi, svm, thresholds }) => ({
  start: () => {
    try {
      const cartAutoscalerJob = scheduleJob(AUTOSCALER_CRON, () => cartAutoscale({ k8sApi, svm, thresholds }));
      console.log(`Cart Autoscaler: ${AUTOSCALER_CRON}, will run at ${cartAutoscalerJob.nextInvocation()}`);

      const catalogueAutoscalerJob = scheduleJob(AUTOSCALER_CRON, () => catalogueAutoscale({ k8sApi, svm, thresholds }));
      console.log(`Catalogue Autoscaler: ${AUTOSCALER_CRON}, will run at ${catalogueAutoscalerJob.nextInvocation()}`);

      const frontendAutoscalerJob = scheduleJob(AUTOSCALER_CRON, () => frontendAutoscale({ k8sApi, svm, thresholds }));
      console.log(`Frontend Autoscaler: ${AUTOSCALER_CRON}, will run at ${frontendAutoscalerJob.nextInvocation()}`);

      const orderAutoscalerJob = scheduleJob(AUTOSCALER_CRON, () => orderAutoscale({ k8sApi, svm, thresholds }));
      console.log(`Order Autoscaler: ${AUTOSCALER_CRON}, will run at ${orderAutoscalerJob.nextInvocation()}`);

      const paymentAutoscalerJob = scheduleJob(AUTOSCALER_CRON, () => paymentAutoscale({ k8sApi, svm, thresholds }));
      console.log(`Payment Autoscaler: ${AUTOSCALER_CRON}, will run at ${paymentAutoscalerJob.nextInvocation()}`);

      const shippingAutoscalerJob = scheduleJob(AUTOSCALER_CRON, () => shippingAutoscale({ k8sApi, svm, thresholds }));
      console.log(`Shipping Autoscaler: ${AUTOSCALER_CRON}, will run at ${shippingAutoscalerJob.nextInvocation()}`);

      const userAutoscalerJob = scheduleJob(AUTOSCALER_CRON, () => userAutoscale({ k8sApi, svm, thresholds }));
      console.log(`User Autoscaler: ${AUTOSCALER_CRON}, will run at ${userAutoscalerJob.nextInvocation()}`);
    } catch (error) {
      console.log('Scheduler', { error });
    }
  },
  cancel: () => {
    Object.values(scheduledJobs).forEach(job => {
      console.log('Cancel Schedule', { name: job.n });
      return scheduledJobs[job.name].cancel();
    });
  }
});
