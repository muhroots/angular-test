angular.module('beer').config(function ($routeProvider) {
	
	$routeProvider.when('/beers', {
		templateUrl: 'view/beers.html',
		controller: 'listBeerController',
		resolve: {
			beers: function (beersAPI) {
				return beersAPI.getBeers();
			},
		}
	});

	$routeProvider.when('/new', {
		templateUrl: 'view/new.html',
		controller: 'newBeerController',
		resolve: {
			countries: function (countriesAPI) {
				return countriesAPI.getCountries();
			},
		}
	});

	$routeProvider.when('/details:id', {
		templateUrl: 'view/details.html',
		controller: 'detailsBeerController',
		resolve: {
			beer: function (beersAPI, $route) {
				return beersAPI.getBeer($route.current.params.id)
			}
		}
	});

	$routeProvider.otherwise({redirectTo: '/beers'});
});