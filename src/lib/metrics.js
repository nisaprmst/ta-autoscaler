const axios = require('axios');
const { PROMETHEUS } = require('../constant/kubernetes');
const { QUERY } = require('../constant/metrics');

async function getMetrics(serviceName) {
	try {
		const nodeMetrics = await getNodeMetrics();
		const serviceMetrics = await getServiceMetrics();
		const generalMetrics = await getGeneralMetrics();
		const result = {
			...nodeMetrics,
			...serviceMetrics,
			...generalMetrics
		};
		console.log('getMetrics:', result);
		return result;
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
				[key]: promResult[0].value[1]
			};
		}));
		// console.log('node metrics:', nodeMetrics);
		return nodeMetrics;
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
				const key = `${q}-${el.metric.pod_set}`;
				serviceMetrics = {
					...serviceMetrics,
					[key]: el.value[1]
				};
			});
		}));
		// console.log('service metrics:', serviceMetrics);
		return serviceMetrics;
	} catch (error) {
		console.log('getServiceMetrics', error);
	}
};

async function getGeneralMetrics() {
	try {
		let generalMetrics = {};
		await Promise.all(Object.keys(QUERY.GENERAL).map(async q => {
			const promResult = await getPrometheusMetrics(QUERY.GENERAL[q]);
			promResult.forEach(el => {
				const { name, route, status_code } = el.metric;
				const key = `${q}-${name}-${route}-${status_code}`;
				generalMetrics = {
					...generalMetrics,
					[key]: el.value[1]
				};
			});
		}));
		// console.log('general metrics:', generalMetrics);
		return generalMetrics;
	} catch (error) {
		console.log('getGeneralMetrics', error);
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