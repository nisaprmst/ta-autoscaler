module.exports = Object.freeze({
	AUTOSCALER_CRON: {
		ORDERS: '*/7 * * * * *',
		CARTS: '*/7 * * * * *',
		FRONTEND: '*/7 * * * * *',
		SHIPPING: '*/7 * * * * *',
		PAYMENT: '*/8 * * * * *',
		USER: '*/8 * * * * *',
	},
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
			ORDERS: 2
		},
		CARTS: {
			REPOSITORY_ID: 2,
			REPOSITORY_ID_PROPERTY: 2
		},
		FRONTEND: {
			FRONTEND: 2,
			ORDERS: 2
		},
		SHIPPING: {
			SHIPPING: 2
		},
		PAYMENT: {
			PAYMENTAUTH: 2
		},
		USER: {
			ADDRESSES: 2,
			CARDS: 2,
			CUSTOMERS: 2
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