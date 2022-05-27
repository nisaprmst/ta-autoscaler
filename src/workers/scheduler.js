import schedule from 'node-schedule';
import cartAutoscale from './cartAutoscale';
import frontendAutoscale from './frontendAutoscale';
import orderAutoscale from './orderAutoscale';
import paymentAutoscale from './paymentAutoscale';
import shippingAutoscale from './shippingAutoscale';
import userAutoscale from './userAutoscale';
import { AUTOSCALER_CRON } from '../constant/autoscaler';

const { scheduleJob, scheduledJobs } = schedule;

export default ({ k8s, models, thresholds }) => ({
  start: () => {
    try {
      const cartAutoscalerJob = scheduleJob(AUTOSCALER_CRON.CARTS, () => cartAutoscale({ k8s, models, thresholds }));
      console.log(`Cart Autoscaler: ${AUTOSCALER_CRON.CARTS}, will run at ${cartAutoscalerJob.nextInvocation()}`);

      const frontendAutoscalerJob = scheduleJob(AUTOSCALER_CRON.FRONTEND, () => frontendAutoscale({ k8s, models, thresholds }));
      console.log(`Frontend Autoscaler: ${AUTOSCALER_CRON.FRONTEND}, will run at ${frontendAutoscalerJob.nextInvocation()}`);

      const orderAutoscalerJob = scheduleJob(AUTOSCALER_CRON.ORDERS, () => orderAutoscale({ k8s, models, thresholds }));
      console.log(`Order Autoscaler: ${AUTOSCALER_CRON.ORDERS}, will run at ${orderAutoscalerJob.nextInvocation()}`);

      const paymentAutoscalerJob = scheduleJob(AUTOSCALER_CRON.PAYMENT, () => paymentAutoscale({ k8s, models, thresholds }));
      console.log(`Payment Autoscaler: ${AUTOSCALER_CRON.PAYMENT}, will run at ${paymentAutoscalerJob.nextInvocation()}`);

      const shippingAutoscalerJob = scheduleJob(AUTOSCALER_CRON.SHIPPING, () => shippingAutoscale({ k8s, models, thresholds }));
      console.log(`Shipping Autoscaler: ${AUTOSCALER_CRON.SHIPPING}, will run at ${shippingAutoscalerJob.nextInvocation()}`);

      const userAutoscalerJob = scheduleJob(AUTOSCALER_CRON.USER, () => userAutoscale({ k8s, models, thresholds }));
      console.log(`User Autoscaler: ${AUTOSCALER_CRON.USER}, will run at ${userAutoscalerJob.nextInvocation()}`);
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
