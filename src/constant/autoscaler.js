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
		ORDERS: {
			ORDERS: {
				MAX: 0.55,
				MIN: 0.2
			}
		},
		CARTS: {
			REPOSITORY_ID: {
				MAX: 0.4,
				MIN: 0.15
			},
			REPOSITORY_ID_PROPERTY: {
				MAX: 0.4,
				MIN: 0.2
			},
		},
		FRONTEND: {
			FRONTEND: {
				MAX: 1.0,
				MIN: 0.65
			},
			CART: {
				MAX: 0.3,
				MIN: 0.1
			},
			ORDERS: {
				MAX: 0.4,
				MIN: 0.2
			}
		},
		SHIPPING: {
			SHIPPING: {
				MAX: 0.5,
				MIN: 0.2
			}
		},
		PAYMENT: {
			PAYMENTAUTH: {
				MAX: 0.4,
				MIN: 0.2
			}
		},
		USER: {
			ADDRESSES: {
				MAX: 0.4,
				MIN: 0.2
			},
			CARDS: {
				MAX: 0.4,
				MIN: 0.2
			},
			CUSTOMERS: {
				MAX: 0.6,
				MIN: 0.4
			}
		}
	},
	MAPPING: {
		ORDERS: 'orders',
		CARTS: 'carts',
		FRONTEND: 'front-end',
		SHIPPING: 'shipping',
		PAYMENT: 'payment',
		USER: 'user'
	}
	
});