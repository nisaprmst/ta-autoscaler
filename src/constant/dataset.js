module.exports = Object.freeze({
	SERVICE: {
		ORDERS: {
			ORDERS: {
				// /orders-201
				X_TRAIN_FILE: '../../../dataset/X_train_request-duration-orders-_orders-201.json',
				X_TEST_FILE: '../../../dataset/X_test_request-duration-orders-_orders-201.json',
				Y_TRAIN_FILE: '../../../dataset/y_train_request-duration-orders-_orders-201.json',
				Y_TEST_FILE: '../../../dataset/y_test_request-duration-orders-_orders-201.json'
			}
		},
		CARTS: {
			REPOSITORY_ID: {
				// /{repository}/{id}-202
				X_TRAIN_FILE: '../../../dataset/X_train_request-duration-carts-_{repository}_{id}-202.json',
				X_TEST_FILE: '../../../dataset/X_test_request-duration-carts-_{repository}_{id}-202.json',
				Y_TRAIN_FILE: '../../../dataset/y_train_request-duration-carts-_{repository}_{id}-202.json',
				Y_TEST_FILE: '../../../dataset/y_test_request-duration-carts-_{repository}_{id}-202.json'
			},
			REPOSITORY_ID_PROPERTY: {
				// /{repository}/{id}/{property}-200
				X_TRAIN_FILE: '../../../dataset/X_train_request-duration-carts-_{repository}_{id}_{property}-200.json',
				X_TEST_FILE: '../../../dataset/X_test_request-duration-carts-_{repository}_{id}_{property}-200.json',
				Y_TRAIN_FILE: '../../../dataset/y_train_request-duration-carts-_{repository}_{id}_{property}-200.json',
				Y_TEST_FILE: '../../../dataset/y_test_request-duration-carts-_{repository}_{id}_{property}-200.json'
			}
		},
		FRONTEND: {
			FRONTEND: {
				// /-200
				X_TRAIN_FILE: '../../../dataset/X_train_request-duration-front-end-_-200.json',
				X_TEST_FILE: '../../../dataset/X_test_request-duration-front-end-_-200.json',
				Y_TRAIN_FILE: '../../../dataset/y_train_request-duration-front-end-_-200.json',
				Y_TEST_FILE: '../../../dataset/y_test_request-duration-front-end-_-200.json'
			},
			ORDERS: {
				// /orders-201
				X_TRAIN_FILE: '../../../dataset/X_train_request-duration-front-end-_orders-201.json',
				X_TEST_FILE: '../../../dataset/X_test_request-duration-front-end-_orders-201.json',
				Y_TRAIN_FILE: '../../../dataset/y_train_request-duration-front-end-_orders-201.json',
				Y_TEST_FILE: '../../../dataset/y_test_request-duration-front-end-_orders-201.json'
			}
		},
		SHIPPING: {
			SHIPPING: {
				// /shipping-201
				X_TRAIN_FILE: '../../../dataset/X_train_request-duration-shipping-_shipping-201.json',
				X_TEST_FILE: '../../../dataset/X_test_request-duration-shipping-_shipping-201.json',
				Y_TRAIN_FILE: '../../../dataset/y_train_request-duration-shipping-_shipping-201.json',
				Y_TEST_FILE: '../../../dataset/y_test_request-duration-shipping-_shipping-201.json'
			}
		},
		PAYMENT: {
			PAYMENTAUTH: {
				// paymentauth-200
				X_TRAIN_FILE: '../../../dataset/X_train_request-duration-payment-paymentauth-200.json',
				X_TEST_FILE: '../../../dataset/X_test_request-duration-payment-paymentauth-200.json',
				Y_TRAIN_FILE: '../../../dataset/y_train_request-duration-payment-paymentauth-200.json',
				Y_TEST_FILE: '../../../dataset/y_test_request-duration-payment-paymentauth-200.json'
			}
		},
		USER: {
			ADDRESSES: {
				// addresses-200
				X_TRAIN_FILE: '../../../dataset/X_train_request-duration-user-addresses-200.json',
				X_TEST_FILE: '../../../dataset/X_test_request-duration-user-addresses-200.json',
				Y_TRAIN_FILE: '../../../dataset/y_train_request-duration-user-addresses-200.json',
				Y_TEST_FILE: '../../../dataset/y_test_request-duration-user-addresses-200.json'
			},
			CARDS: {
				// cards-200
				X_TRAIN_FILE: '../../../dataset/X_train_request-duration-user-cards-200.json',
				X_TEST_FILE: '../../../dataset/X_test_request-duration-user-cards-200.json',
				Y_TRAIN_FILE: '../../../dataset/y_train_request-duration-user-cards-200.json',
				Y_TEST_FILE: '../../../dataset/y_test_request-duration-user-cards-200.json'
			},
			CUSTOMERS: {
				// customers-200
				X_TRAIN_FILE: '../../../dataset/X_train_request-duration-user-customers-200.json',
				X_TEST_FILE: '../../../dataset/X_test_request-duration-user-customers-200.json',
				Y_TRAIN_FILE: '../../../dataset/y_train_request-duration-user-customers-200.json',
				Y_TEST_FILE: '../../../dataset/y_test_request-duration-user-customers-200.json'
			}
		}
	},
	GAMMA: {
		ORDERS: {
			// /orders-201
			ORDERS: 0.3564354018516369
		},
		CARTS: {
			// /{repository}/{id}-202
			REPOSITORY_ID: 0.3939092906135015,
			// /{repository}/{id}/{property}-200
			REPOSITORY_ID_PROPERTY: 0.40581987925161095
		},
		FRONTEND: {
			// /-200
			FRONTEND: 0.4059586461005309,
			// /orders-201
			ORDERS: 0.35232534475489347
		},
		SHIPPING: {
			// /shipping-201
			SHIPPING: 0.4087822746557316
		},
		PAYMENT: {
			// paymentauth-200
			PAYMENTAUTH: 0.4078770941045663
		},
		USER: {
			// addresses-200
			ADDRESSES: 0.39489742231861014,
			// cards-200
			CARDS: 0.39628644605255525,
			// customers-200
			CUSTOMERS: 0.39637551861504433
		}
	}
});