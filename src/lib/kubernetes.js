const k8s = require('@kubernetes/client-node');

class Kubernetes {
  constructor({ k8sApi }) {
    this.k8sApi = k8sApi;
  }

  async getCurrentDeployment(namespace, name) {
    try {
      const res = await this.k8sApi.readNamespacedDeployment(name, namespace);
      let deployment = res.body;
      console.log('success getting current deployment')
      return deployment;
    } catch (error) {
      console.log('lib-Kubernetes-getCurrentReplicas', error);
    }
  }

  async scale(currDeployment, name, namespace, max, min, replicaCount) {
    try {
      let deployment = currDeployment;
      // scale if within pod threshold
      const currentReplicas = deployment.spec.replicas;
      console.log('replica count target and current:', replicaCount, currentReplicas);
      if (replicaCount !== currentReplicas) {
        let targetReplicas = replicaCount;
        if (replicaCount > max) {
          targetReplicas = max;
        } else if (replicaCount < min) {
          targetReplicas = min;
        }
        deployment.spec.replicas = targetReplicas;
        // replace
        await this.k8sApi.replaceNamespacedDeployment(name, namespace, deployment);
        console.log('success scaling deployment:', name);
      } else {
        console.log('not scaled:', name);
      }
    } catch (error) {
      console.log('lib-Kubernetes-scale', error);
    }
  }
}

module.exports = Kubernetes;
