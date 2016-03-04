angular.module('beer').controller('listBeerController', function ($scope, beers) {
	$scope.beers = beers.data;

	// orderBy
	$scope.predicate = 'alcohol';
	$scope.reverse = false;	
	$scope.order = function(predicate) {
		$scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : true;
		$scope.predicate = predicate;
	};

	// details
	$scope.details = function (id) {

	};
})