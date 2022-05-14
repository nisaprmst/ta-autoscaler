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
			CART: {
				// /cart-202
				X_TRAIN_FILE: '../../../dataset/X_train_request-duration-front-end-_cart-202.json',
				X_TEST_FILE: '../../../dataset/X_test_request-duration-front-end-_cart-202.json',
				Y_TRAIN_FILE: '../../../dataset/y_train_request-duration-front-end-_cart-202.json',
				Y_TEST_FILE: '../../../dataset/y_test_request-duration-front-end-_cart-202.json'
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
			ORDERS: 0.2230907643751767
		},
		CARTS: {
			// /{repository}/{id}-202
			REPOSITORY_ID: 0.22230810272161733,
			// /{repository}/{id}/{property}-200
			REPOSITORY_ID_PROPERTY: 0.2207935190866042
		},
		FRONTEND: {
			// /-200
			FRONTEND: 0.22181324987128015,
			// /cart-202
			CART: 0.2224555025228225,
			// /orders-201
			ORDERS: 0.22266108177377317
		},
		SHIPPING: {
			// /shipping-201
			SHIPPING: 0.23234108375594442
		},
		PAYMENT: {
			// paymentauth-200
			PAYMENTAUTH: 0.22355361107542293
		},
		USER: {
			// addresses-200
			ADDRESSES: 0.22315290040707997,
			// cards-200
			CARDS: 0.22300230894817658,
			// customers-200
			CUSTOMERS: 0.23133624036223221
		}
	}
});