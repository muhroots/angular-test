/*
 * LIST ORDERS
 *
 */

angular.module('beer').controller('listOrderController', function ($scope, orders) {
	$scope.orders = orders.data;

	// orderBy
	$scope.predicate = 'price';
	$scope.reverse = false;	
	$scope.order = function(predicate) {
		$scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : true;
		$scope.predicate = predicate;
	};	
});
