const k8s = require('@kubernetes/client-node');
const {
    CLUSTER,
    USER,
    CONTEXT,
    CURRENT
} = require('../constant/kubernetes');

const kc = new k8s.KubeConfig();
kc.loadFromOptions({
    clusters: CLUSTER,
    users: USER,
    contexts: CONTEXT,
    currentContext: CURRENT
});
const k8sApi = kc.makeApiClient(k8s.AppsV1Api);
export default k8sApi;

