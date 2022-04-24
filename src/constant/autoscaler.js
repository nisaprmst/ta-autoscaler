module.exports = Object.freeze({
	AUTOSCALER_CRON: '*/15 * * * * *',
	POD_NUMBER: {
		ORDERS: {
            MAX: 10,
            MIN: 1
        },
        CARTS: {
            MAX: 10,
            MIN: 1
        },
        CATALOGUE: {
            MAX: 10,
            MIN: 1
        },
        FRONTEND: {
            MAX: 10,
            MIN: 1
        },
        SHIPPING: {
            MAX: 10,
            MIN: 1
        },
        USER: {
            MAX: 10,
            MIN: 1
        },
		PAYMENT: {
            MAX: 10,
            MIN: 1
        }
	},
	THRESHOLDS: {
		FE_ORDERS: {
			THRESHOLD: 4,
			THRESHOLD_PERCENTAGE: {
				CARTS: 13.67,
				CATALOGUE: 17.87,
				FRONTEND: 13.04,
				ORDERS: 13.72,
				PAYMENT: 11,
				SHIPPING: 16.59,
				USER: 14.04
			}
        },
        FE_CART: {
			THRESHOLD: 4,
			THRESHOLD_PERCENTAGE: {
				CARTS: 13.67,
				CATALOGUE: 17.87,
				FRONTEND: 13.04,
				ORDERS: 13.72,
				PAYMENT: 11,
				SHIPPING: 16.59,
				USER: 14.04
			}
        },
        FE_LOGIN: {
			THRESHOLD: 4,
			THRESHOLD_PERCENTAGE: {
				CARTS: 13.67,
				CATALOGUE: 17.87,
				FRONTEND: 13.04,
				ORDERS: 13.72,
				PAYMENT: 11,
				SHIPPING: 16.59,
				USER: 14.04
			}
        },
        FE_CATALOGUE: {
			THRESHOLD: 4,
			THRESHOLD_PERCENTAGE: {
				CARTS: 13.67,
				CATALOGUE: 17.87,
				FRONTEND: 13.04,
				ORDERS: 13.72,
				PAYMENT: 11,
				SHIPPING: 16.59,
				USER: 14.04
			}
        },
        SHIPPING: {
			THRESHOLD: 4,
			THRESHOLD_PERCENTAGE: {
				CARTS: 13.67,
				CATALOGUE: 17.87,
				FRONTEND: 13.04,
				ORDERS: 13.72,
				PAYMENT: 11,
				SHIPPING: 16.59,
				USER: 14.04
			}
        },
        USER: {
			THRESHOLD: 4,
			THRESHOLD_PERCENTAGE: {
				CARTS: 13.67,
				CATALOGUE: 17.87,
				FRONTEND: 13.04,
				ORDERS: 13.72,
				PAYMENT: 11,
				SHIPPING: 16.59,
				USER: 14.04
			}
        }
	}
});