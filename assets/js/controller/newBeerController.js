angular.module('beer').controller('newBeerController', function ($scope, $location, beersAPI, countries) {
	$scope.countries = countries.data;

	$scope.addBeer = function (beer) {
		beersAPI.saveBeer(beer).success(function () {
			delete $scope.beer;
			$location.path('/beers')
		});
	}
})