angular.module('beer').controller('listBeerController', function ($scope, beers) {
	$scope.beers = beers.data;
})