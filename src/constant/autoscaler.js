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
			ORDERS: 0.5
		},
		CARTS: {
			REPOSITORY_ID: 0.5,
			REPOSITORY_ID_PROPERTY: 0.5
		},
		FRONTEND: {
			FRONTEND: 0.5,
			CART: 0.5,
			ORDERS: 0.5
		},
		SHIPPING: {
			SHIPPING: 0.5
		},
		PAYMENT: {
			PAYMENTAUTH: 0.5
		},
		USER: {
			ADDRESSES: 0.5,
			CARDS: 0.5,
			CUSTOMERS: 0.5
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