const axios = require('axios');
const { PROMETHEUS } = require('../constant/kubernetes');

async function getMetrics(serviceName) {
	try {
		const url = PROMETHEUS.ENDPOINT;
		const now = new Date();
		const timestamp = now.getTime();
		const query = 'avg(rate(node_disk_read_bytes_total[30s])) by (instance)';

		const data = await axios.get(`http://${url}/api/v1/query?query=${query}&time=${timestamp}`);
		console.log(`getMetrics data ${serviceName}:`, data.data);
		return data.data;
	} catch (error) {
		console.log(`${serviceName} getMetrics`, error);
		// throw error;
	}
};
  
module.exports = {
	getMetrics
};