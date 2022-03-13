import schedule from 'node-schedule';
import autoscale from './autoscale';
import { AUTOSCALER_CRON } from '../constant/autoscaler';

const { scheduleJob, scheduledJobs } = schedule;

export default ({ k8sApi }) => ({
  start: () => {
    try {
      const autoscalerJob = scheduleJob(AUTOSCALER_CRON, () => autoscale({ k8sApi }));
      console.log(`Autoscaler: ${AUTOSCALER_CRON}, will run at ${autoscalerJob.nextInvocation()}`);
    } catch (error) {
      console.log('Scheduler', { error });
    }
  },
  cancel: () => {
    Object.values(scheduledJobs).forEach(job => {
      console.log('Cancel Schedule', { name: job.name });
      return scheduledJobs[job.name].cancel();
    });
  }
});
