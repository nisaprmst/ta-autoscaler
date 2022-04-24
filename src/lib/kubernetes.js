const k8s = require('@kubernetes/client-node');

class Kubernetes {
  constructor({ k8sApi }) {
    this.k8sApi = k8sApi;
  }

  async scaleOut(namespace, name, max) {
    try {
      // find the particular deployment
      const res = await this.k8sApi.readNamespacedDeployment(name, namespace);
      let deployment = res.body;
      // edit if below max
      let replicas = deployment.spec.replicas;
      if (replicas < max) {
        replicas += 1;
        deployment.spec.replicas = replicas;
        // replace
        await this.k8sApi.replaceNamespacedDeployment(name, namespace, deployment);
        console.log('success scaling deployment:', name);
      }
    } catch (error) {
      console.log('lib-Kubernetes-scale', error);
    }
  }
}

module.exports = Kubernetes;
