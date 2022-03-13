const k8s = require('@kubernetes/client-node');

class Kubernetes {
  constructor({ k8sApi }) {
    this.k8sApi = k8sApi;
  }

  async scale(namespace, name, replicas) {
    try {
      // find the particular deployment
      const res = await this.k8sApi.readNamespacedDeployment(name, namespace);
      let deployment = res.body;
    
      // edit
      deployment.spec.replicas = replicas;
    
      // replace
      await k8sApi.replaceNamespacedDeployment(name, namespace, deployment);
    } catch (error) {
      console.log('lib-Kubernetes-scale', error);
    }
  }
}

module.exports = Kubernetes;
