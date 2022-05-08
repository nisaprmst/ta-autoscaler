const { SERVICE } = require('../../constant/dataset');
const BatchScaler = require('./batchScaler');
const { transpose } = require('./util');

const loadData = (serviceName, endpoint) => {
    let X_train = require(SERVICE[serviceName][endpoint].X_TRAIN_FILE);
    let X_test = require(SERVICE[serviceName][endpoint].X_TEST_FILE);
    let y_train = require(SERVICE[serviceName][endpoint].Y_TRAIN_FILE);
    let y_test = require(SERVICE[serviceName][endpoint].Y_TEST_FILE);
    X_train = Object.keys(X_train).map((key) => {
        let values = X_train[key];
        values = Object.keys(values).map(v => values[v]);
        return values;
    });
    
    const batchScaler = new BatchScaler();
    batchScaler.fit(X_train);
    X_train = batchScaler.transform(X_train);
    X_train = transpose(X_train);
    
    X_test = Object.keys(X_test).map((key) => {
        let values = X_test[key];
        values = Object.keys(values).map(v => values[v]);
        return values;
    });
    X_test = batchScaler.transform(X_test);
    X_test = transpose(X_test);
    
    y_test = Object.keys(y_test).map(v =>  y_test[v]);
    y_train = Object.keys(y_train).map(v =>  y_train[v]);

    return {
        X_train,
        X_test,
        y_train,
        y_test
    };
}

module.exports = {
    loadData
}