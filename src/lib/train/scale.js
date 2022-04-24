class Scaler {
    constructor() {
        this.min = Number.MAX_SAFE_INTEGER;
        this.max = 0;
        this.max_scale = 1;
        this.min_scale = 0;
    }

    fit(data) {
        data.forEach(element => {
            if (element < this.min) this.min = element;
            if (element > this.max) this.max = element;
        });
    }

    transform(data) {
        let scaled = data;
        scaled = data.map(el => {
            if (this.max - this.min == 0) return this.min_scale;
            let s = (el - this.min) * (this.max_scale - this.min_scale) / (this.max - this.min);
            s += this.min_scale;
            return s;
        });
        return scaled;
    }
};

module.exports = Scaler;