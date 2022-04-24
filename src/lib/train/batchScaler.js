const Scaler = require("./scale");

class BatchScaler {
    constructor() {
        this.scalers = [];
    }

    fit(data) {
        data.forEach(feature => {
            // console.log(feature.length)
            const scaler = new Scaler();
            scaler.fit(feature);
            this.scalers.push(scaler);
        });
    }

    transform(data) {
        let scaled = []
        for (let i = 0; i < data.length; i++) {
            scaled.push(this.scalers[i].transform(data[i]));
        }
        return scaled;
    }
};

module.exports = BatchScaler;