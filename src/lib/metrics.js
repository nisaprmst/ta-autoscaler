const axios = require('axios');
const { PROMETHEUS } = require('../constant/kubernetes');
const { QUERY } = require('../constant/metrics');

async function getMetrics(serviceName) {
	try {
		const { nodeMetrics, nodeResult } = await getNodeMetrics();
		const { serviceMetrics, serviceResult } = await getServiceMetrics();
		const metricsDict = {
			...nodeMetrics,
			...serviceMetrics
		};
		const metrics = [...nodeResult, ...serviceResult];
		console.log(`${serviceName} getMetrics metricsDict:`, metricsDict);
		console.log(`${serviceName}getMetrics metrics:`, metrics);
		return { metrics, metricsDict };
	} catch (error) {
		console.log(`${serviceName} getMetrics`, error);
	}
};

async function getNodeMetrics() {
	try {
		let nodeMetrics = {};
		await Promise.all(Object.keys(QUERY.NODE).map(async q => {
			const promResult = await getPrometheusMetrics(QUERY.NODE[q]);
			const key = `${q}-node`;
			nodeMetrics = {
				...nodeMetrics,
				[key]: parseFloat(promResult[0].value[1])
			};
		}));
		const nodeResult = [];
		nodeResult.push(nodeMetrics['CPU-node']);
		nodeResult.push(nodeMetrics['READ-node']);
		nodeResult.push(nodeMetrics['WRITE-node']);
		nodeResult.push(nodeMetrics['NETWORK-node']);
		return { nodeMetrics, nodeResult };
	} catch (error) {
		console.log('getNodeMetrics', error);
	}
};

async function getServiceMetrics() {
	try {
		let serviceMetrics = {};
		await Promise.all(Object.keys(QUERY.SERVICE).map(async q => {
			const promResult = await getPrometheusMetrics(QUERY.SERVICE[q]);
			promResult.forEach(el => {
				const key = q === 'REQUEST_RATE' ? `${q}-${el.metric.kubernetes_name}` : `${q}-${el.metric.pod_set}`;
				console.log('key service', key);
				serviceMetrics = {
					...serviceMetrics,
					[key]: parseFloat(el.value[1])
				};
			});
		}));
		const serviceResult = [];
		const keys = [
			'CPU-carts','CPU-carts-db','CPU-front-end','CPU-orders','CPU-orders-db','CPU-payment','CPU-shipping','CPU-user','CPU-user-db',
			'NETWORK-carts','NETWORK-carts-db','NETWORK-front-end','NETWORK-orders','NETWORK-orders-db','NETWORK-payment','NETWORK-shipping','NETWORK-user','NETWORK-user-db',
			'NUM_PODS-carts','NUM_PODS-carts-db','NUM_PODS-front-end','NUM_PODS-orders','NUM_PODS-orders-db','NUM_PODS-payment','NUM_PODS-shipping','NUM_PODS-user','NUM_PODS-user-db',
			'REQUEST_RATE-carts','REQUEST_RATE-front-end','REQUEST_RATE-orders','REQUEST_RATE-payment','REQUEST_RATE-shipping','REQUEST_RATE-user'
		];
		keys.forEach(k => {
			if (serviceMetrics[k]) {
				serviceResult.push(serviceMetrics[k]);
			} else {
				if (k.startsWith('NUM_PODS')) serviceResult.push(1);
				else serviceResult.push(0);
			}
		});
		
		return { serviceMetrics, serviceResult };
	} catch (error) {
		console.log('getServiceMetrics', error);
	}
};

async function getPrometheusMetrics(query) {
	try {
		const url = PROMETHEUS.ENDPOINT;
		const now = new Date();
		const timestamp = now.getTime() / 1000;
		const fullUrl = `http://${url}/api/v1/query?query=${encodeURIComponent(query)}&time=${timestamp}`;
		const promResult = await axios.get(fullUrl);
		// console.log(`getPrometheusMetrics data ${fullUrl}:`, promResult.data.data.result);
		return promResult.data.data.result;
	} catch (error) {
		console.log('getPrometheusMetrics', error);
	}
};
  
module.exports = {
	getMetrics
};