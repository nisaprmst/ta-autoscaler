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
	// let coba_X = [[ 0.0034428571428571733,837.4044444444444,3112.96,14309.83953216374,0.0009032041121801504,0.0041188955535895475,0.0010301500753381867,0.0008928377919457849,0.004004971604776723,0.00023602336178645708,0.0007447770432816012,0.00032410785459616913,0.0034312549458957267,388.6153056223306,41.59873783854851,5908.416747571915,428.6119010533752,39.57790071405942,385.9600164624055,524.1520390655932,579.5341708442749,75.64200728648137,1,1,10,1,1,1,1,1,1,0,6.666666666666667,0,0,0,0 ]];
	// let coba_X = [[
	// 	0.0029857142857142535,                     0,
	// 	2275.555555555555,    10269.040935672514,
	// 0.0017844283657258394,  0.003748620338116402,
	// 0.0010347593145366334,  0.001806182739444458,
	// 0.0036617049758068403, 0.0005228797290740746,
	// 0.0016866312531447466, 0.0008615747436107321,
	// 0.0034254758697422377,                   272,
	// 	44.80025509042045,     6124.444653851606,
	// 	539.9448489751888,     42.45537545056225,
	// 				  286,     456.5714503006084,
	// 	681.4818029905164,     95.11761693924882,
	// 					1,                     1,
	// 				   10,                     1,
	// 					1,                     1,
	// 					1,                     1,
	// 					1,                     0,
	// 	6.666666666666667,                     0,
	// 					0,                     0,
	// 					0  
	//   ]]
	// coba_X = transpose(coba_X)
	// let coba_scaled = batchScaler.transform(coba_X)
	// // console.log(coba_scaled)
	// coba_scaled = transpose(coba_scaled)
	// const coba = svm.predictOne(coba_scaled[0]);
	const maeScore = mae(y_test, predicted);
	const r2Score = r2(y_test, predicted);
	console.log(`====${serviceName}====`);
	console.log("mean absolute error:", maeScore);
	console.log("r2:", r2Score);
	console.log("\n");
	return { model: svm, batchScaler };
};

async function run() {
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