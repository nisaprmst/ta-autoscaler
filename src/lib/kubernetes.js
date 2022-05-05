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
        console.log('success scaling out deployment:', name);
      }
    } catch (error) {
      console.log('lib-Kubernetes-scaleOut', error);
    }
  }

  async scaleDown(namespace, name, min) {
    try {
      // find the particular deployment
      const res = await this.k8sApi.readNamespacedDeployment(name, namespace);
      let deployment = res.body;
      // edit if above min
      let replicas = deployment.spec.replicas;
      if (replicas > min) {
        replicas -= 1;
        deployment.spec.replicas = replicas;
        // replace
        await this.k8sApi.replaceNamespacedDeployment(name, namespace, deployment);
        console.log('success scaling down deployment:', name);
      }
    } catch (error) {
      console.log('lib-Kubernetes-scaleDown', error);
    }
  }
}

module.exports = Kubernetes;
