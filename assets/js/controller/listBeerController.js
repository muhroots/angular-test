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
	$scope.showBeer = function () {
		var modalInstance = $uibModal.open({
			animation: true,
			templateUrl: 'view/ui/modal.html',
			controller: 'showBeerController',
			resolve: {
		        beer: function (beersAPI) {
		        	return beersAPI.getBeers();
		        }
		    }
	    });
	};
});

angular.module('beer').controller('showBeerController', function ($scope, beer) {
	$scope.beer = beer.data[0];
});