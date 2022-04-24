const { loadData } = require('./loadDataset');
const { mae, r2 } = require('./util');

async function run() {
    const SVM = await require('libsvm-js');

    const { X_train, X_test, y_train, y_test } = loadData();
    const svm = new SVM({
        type: SVM.SVM_TYPES.EPSILON_SVR,
        kernel: SVM.KERNEL_TYPES.RBF,
    });
    svm.train(X_train, y_train);
    const predicted = svm.predict(X_test);
    const maeScore = mae(y_test, predicted);
    const r2Score = r2(y_test, predicted);
    console.log("mean absolute error:", maeScore);
    console.log("r2:", r2Score);
    return svm;
}

module.exports = run;