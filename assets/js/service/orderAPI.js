angular.module('beer').factory('ordersAPI', function ($http, config) {
	var _getOrders = function () {
		return $http.get(config.baseURL + '/orders.json');
	}

	var _getOrder = function (id) {
		return $http.get(config.baseURL + '/orders.json');
	}

	var _saveOrder = function (order) {
		return $http.post(config.baseURL + '/orders', order);
	}

	return {
		getOrders: _getOrders,
		getOrder: _getOrder,
		saveOrder: _saveOrder,
	};
});