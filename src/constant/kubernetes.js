module.exports = Object.freeze({
	CONTEXT: [
		{
			cluster: 'minikube',
			user: 'minikube',
			name: 'minikube'
		},
		{
			cluster: 'gke_stei-rpl-13518085_asia-southeast1-a_ta-custom',
			user: 'gke_stei-rpl-13518085_asia-southeast1-a_ta-custom',
			name: 'gke_stei-rpl-13518085_asia-southeast1-a_ta-custom'
		}
	],
	USER: [
		{
			name: 'minikube',
			certFile: '/home/annisa/.minikube/profiles/minikube/client.crt',
			keyFile: '/home/annisa/.minikube/profiles/minikube/client.key'
		},
		{
			name: 'gke_stei-rpl-13518085_asia-southeast1-a_ta-custom',
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
		},
		{
			name: 'gke_stei-rpl-13518085_asia-southeast1-a_ta-custom',
			server: 'https://34.87.111.233'
			// skipTLSVerify: true,
			// caFile: '/home/annisa/.minikube/ca.crt'
		}
	],
	DEPLOYMENT: {
		ORDERS: {
			NAME: 'orders'
		},
		CARTS: {
			NAME:'carts'
		},
		SHIPPING: {
			NAME:'shipping'
		},
		FRONTEND: {
			NAME:'front-end'
		},
		PAYMENT: {
			NAME:'payment'
		},
		CATALOGUE: {
			NAME:'catalogue'
		},
		USER: {
			NAME:'user'
		}
	},
	PROMETHEUS: {
		ENDPOINT:'10.52.11.214:9090'// isi endpoint prometheus
		// ENDPOINT:'localhost:8081'// isi endpoint prometheus
	},
	CURRENT: 'gke_stei-rpl-13518085_asia-southeast1-a_ta-custom',
	NAMESPACE: 'sock-shop'
});