/*
 * NEW BEER
 *
 */

 angular.module('beer').controller('newBeerController', function ($scope, $location, beersAPI, countries) {
	$scope.countries = countries.data;

	$scope.addBeer = function (beer) {
		beersAPI.saveBeer(beer).success(function () {
			delete $scope.beer;
			$location.path('/beers')
		});
	}
});


/*
 * LIST BEERS
 *
 */

angular.module('beer').controller('listBeerController', function ($scope, $uibModal, beers) {
	$scope.beers = beers.data;

	// orderBy
	$scope.predicate = 'alcohol';
	$scope.reverse = false;	
	$scope.order = function(predicate) {
		$scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : true;
		$scope.predicate = predicate;
	};	

	// show beer modal
	$scope.showBeer = function (beer) {
		var modalInstance = $uibModal.open({
			animation: true,
			templateUrl: 'view/details.html',
			controller: 'showBeerController',
			resolve: {
		        beer: function (beersAPI) {
		        	return beersAPI.getBeer();
		        },
		        // gambs
		        id: function () {
		        	return beer.id;
		        }
		    }
	    });
	};
});

/*
 * SHOW BEER
 *
 */

angular.module('beer').controller('showBeerController', function ($scope, beer, id) {
	$scope.beer = beer.data[id];
});