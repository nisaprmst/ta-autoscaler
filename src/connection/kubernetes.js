const k8s = require('@kubernetes/client-node');

const { USER, CLUSTER, CONTEXT } = '../constant/kubernetes';

const kc = new k8s.KubeConfig();
kc.loadFromOptions({
    clusters: [CLUSTER],
    users: [USER],
    contexts: [CONTEXT],
    currentContext: CONTEXT.name,
});
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

export default k8sApi;

