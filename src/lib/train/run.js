const fs = require('fs')
const { loadData } = require('./loadDataset');
const { mae, r2, transpose } = require('./util');
const { SERVICE, GAMMA } = require('../../constant/dataset');

async function runService(serviceName, endpoint) {
	const SVM = await require('libsvm-js');

	const { X_train, X_test, y_train, y_test, batchScaler } = loadData(serviceName, endpoint);
	console.log(`====${serviceName}, ${endpoint}====`)
	const svm = new SVM({
		type: SVM.SVM_TYPES.EPSILON_SVR,
		kernel: SVM.KERNEL_TYPES.RBF,
		epsilon: 0.2,
		gamma: GAMMA[serviceName][endpoint],
		cacheSize: 200
	});
	svm.train(X_train, y_train);

	const predicted = svm.predict(X_test);
	const maeScore = mae(y_test, predicted);
	const r2Score = r2(y_test, predicted);
	console.log(`====${serviceName}====`);
	console.log("mean absolute error:", maeScore);
	console.log("r2:", r2Score);
	console.log("\n");
	return { model: svm, batchScaler };
};

async function run() {
	return 0;
	let svm = {};
	await Promise.all(Object.keys(SERVICE).map(async s => {
		let endpoint = {};
		await Promise.all(Object.keys(SERVICE[s]).map(async e => {
			const { model, batchScaler } = await runService(s, e);
			endpoint = {
				...endpoint,
				[e]: { model, batchScaler }
			};
		}))
		svm = {
			...svm,
			[s]: endpoint
		};
	}));
	return svm;
};

module.exports = run;