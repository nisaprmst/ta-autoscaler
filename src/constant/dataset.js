module.exports = Object.freeze({
	SERVICE: {
		ORDERS: {
			ORDERS: {
				// /orders-201
				X_TRAIN_FILE: '../../../dataset/smaller_X_train_request-duration-orders-_orders-201.json',
				X_TEST_FILE: '../../../dataset/smaller_X_test_request-duration-orders-_orders-201.json',
				Y_TRAIN_FILE: '../../../dataset/smaller_y_train_request-duration-orders-_orders-201.json',
				Y_TEST_FILE: '../../../dataset/smaller_y_test_request-duration-orders-_orders-201.json'
			}
		},
		CARTS: {
			REPOSITORY_ID: {
				// /{repository}/{id}-202
				X_TRAIN_FILE: '../../../dataset/smaller_X_train_request-duration-carts-_{repository}_{id}-202.json',
				X_TEST_FILE: '../../../dataset/smaller_X_test_request-duration-carts-_{repository}_{id}-202.json',
				Y_TRAIN_FILE: '../../../dataset/smaller_y_train_request-duration-carts-_{repository}_{id}-202.json',
				Y_TEST_FILE: '../../../dataset/smaller_y_test_request-duration-carts-_{repository}_{id}-202.json'
			},
			REPOSITORY_ID_PROPERTY: {
				// /{repository}/{id}/{property}-200
				X_TRAIN_FILE: '../../../dataset/smaller_X_train_request-duration-carts-_{repository}_{id}_{property}-200.json',
				X_TEST_FILE: '../../../dataset/smaller_X_test_request-duration-carts-_{repository}_{id}_{property}-200.json',
				Y_TRAIN_FILE: '../../../dataset/smaller_y_train_request-duration-carts-_{repository}_{id}_{property}-200.json',
				Y_TEST_FILE: '../../../dataset/smaller_y_test_request-duration-carts-_{repository}_{id}_{property}-200.json'
			}
		},
		FRONTEND: {
			FRONTEND: {
				// /-200
				X_TRAIN_FILE: '../../../dataset/smaller_X_train_request-duration-front-end-_-200.json',
				X_TEST_FILE: '../../../dataset/smaller_X_test_request-duration-front-end-_-200.json',
				Y_TRAIN_FILE: '../../../dataset/smaller_y_train_request-duration-front-end-_-200.json',
				Y_TEST_FILE: '../../../dataset/smaller_y_test_request-duration-front-end-_-200.json'
			},
			CART: {
				// /cart-202
				X_TRAIN_FILE: '../../../dataset/smaller_X_train_request-duration-front-end-_cart-202.json',
				X_TEST_FILE: '../../../dataset/smaller_X_test_request-duration-front-end-_cart-202.json',
				Y_TRAIN_FILE: '../../../dataset/smaller_y_train_request-duration-front-end-_cart-202.json',
				Y_TEST_FILE: '../../../dataset/smaller_y_test_request-duration-front-end-_cart-202.json'
			},
			ORDERS: {
				// /orders-201
				X_TRAIN_FILE: '../../../dataset/smaller_X_train_request-duration-front-end-_orders-201.json',
				X_TEST_FILE: '../../../dataset/smaller_X_test_request-duration-front-end-_orders-201.json',
				Y_TRAIN_FILE: '../../../dataset/smaller_y_train_request-duration-front-end-_orders-201.json',
				Y_TEST_FILE: '../../../dataset/smaller_y_test_request-duration-front-end-_orders-201.json'
			}
		},
		SHIPPING: {
			SHIPPING: {
				// /shipping-201
				X_TRAIN_FILE: '../../../dataset/smaller_X_train_request-duration-shipping-_shipping-201.json',
				X_TEST_FILE: '../../../dataset/smaller_X_test_request-duration-shipping-_shipping-201.json',
				Y_TRAIN_FILE: '../../../dataset/smaller_y_train_request-duration-shipping-_shipping-201.json',
				Y_TEST_FILE: '../../../dataset/smaller_y_test_request-duration-shipping-_shipping-201.json'
			}
		},
		PAYMENT: {
			PAYMENTAUTH: {
				// paymentauth-200
				X_TRAIN_FILE: '../../../dataset/smaller_X_train_request-duration-payment-paymentauth-200.json',
				X_TEST_FILE: '../../../dataset/smaller_X_test_request-duration-payment-paymentauth-200.json',
				Y_TRAIN_FILE: '../../../dataset/smaller_y_train_request-duration-payment-paymentauth-200.json',
				Y_TEST_FILE: '../../../dataset/smaller_y_test_request-duration-payment-paymentauth-200.json'
			}
		},
    USER: {
			ADDRESSES: {
				// addresses-200
				X_TRAIN_FILE: '../../../dataset/smaller_X_train_request-duration-user-addresses-200.json',
				X_TEST_FILE: '../../../dataset/smaller_X_test_request-duration-user-addresses-200.json',
				Y_TRAIN_FILE: '../../../dataset/smaller_y_train_request-duration-user-addresses-200.json',
				Y_TEST_FILE: '../../../dataset/smaller_y_test_request-duration-user-addresses-200.json'
			},
			CARDS: {
				// cards-200
				X_TRAIN_FILE: '../../../dataset/smaller_X_train_request-duration-user-cards-200.json',
				X_TEST_FILE: '../../../dataset/smaller_X_test_request-duration-user-cards-200.json',
				Y_TRAIN_FILE: '../../../dataset/smaller_y_train_request-duration-user-cards-200.json',
				Y_TEST_FILE: '../../../dataset/smaller_y_test_request-duration-user-cards-200.json'
			},
			CUSTOMERS: {
				// customers-200
				X_TRAIN_FILE: '../../../dataset/smaller_X_train_request-duration-user-customers-200.json',
				X_TEST_FILE: '../../../dataset/smaller_X_test_request-duration-user-customers-200.json',
				Y_TRAIN_FILE: '../../../dataset/smaller_y_train_request-duration-user-customers-200.json',
				Y_TEST_FILE: '../../../dataset/smaller_y_test_request-duration-user-customers-200.json'
			}
		}
	}
});