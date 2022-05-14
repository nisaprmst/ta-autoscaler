const transpose = (arr) => {
    return arr[0].map((col, i) => arr.map(row => row[i]));
};

const mae = (y_true, y_pred) => {
    let sum = 0;
    const length = y_true.length;
    for (let i = 0; i < length; i++) {
        sum += Math.abs(y_true[i] - y_pred[i]);
    }
    return sum / length;
}

const r2 = (y_true, y_pred) => {
    let tss = 0;
    let rss = 0;
    const sum = y_true.reduce((partialSum, a) => partialSum + a, 0);
    const y_true_avg = sum / y_true.length;
    for (let i = 0; i < y_true.length; i++) {
        tss += Math.pow((y_true_avg - y_true[i]), 2);
        rss += Math.pow((y_true[i] - y_pred[i]), 2);
    }
    return (1 - (rss/tss));
}

const findVariance = (arr = []) => {
    if(!arr.length){
       return 0;
    };
    const sum = arr.reduce((acc, val) => acc + val);
    const { length: num } = arr;
    const median = sum / num;
    let variance = 0;
    arr.forEach(num => {
       variance += ((num - median) * (num - median));
    });
    variance /= num;
    return variance;
 };

module.exports = {
    transpose,
    mae,
    r2,
    findVariance
}