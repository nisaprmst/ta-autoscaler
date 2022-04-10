module.exports = Object.freeze({
	CONTEXT: [
		{
			cluster: 'minikube',
			user: 'minikube',
			name: 'minikube'
		}
	],
	USER: [
		{
			name: 'minikube',
			certFile: '/home/annisa/.minikube/profiles/minikube/client.crt',
			keyFile: '/home/annisa/.minikube/profiles/minikube/client.key'
		}
	],
	CLUSTER: [
		{
			name: 'minikube',
			server: 'https://192.168.49.2:8443',
			// skipTLSVerify: true,
			caFile: '/home/annisa/.minikube/ca.crt'
		}
	],
	DEPLOYMENT: {
		order: 'orders'
	},
	CURRENT: 'minikube',
	NAMESPACE: 'sock-shop'
});