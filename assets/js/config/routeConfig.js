angular.module('beer').config(function ($routeProvider, $locationProvider) {

	/*
	 * BEER
	 *
	 */

	$routeProvider
	.when('/beers', {
		templateUrl: 'view/beers.html',
		controller: 'listBeerController',
		resolve: {
			beers: function (beersAPI) {
				return beersAPI.getBeers();
			},
		}
	})

	.when('/beers/new', {
		templateUrl: 'view/new.html',
		controller: 'newBeerController',
		resolve: {
			countries: function (countriesAPI) {
				return countriesAPI.getCountries();
			},
		}
	})

	/*
	 * ORDERS
	 *
	 */

	.when('/orders', {
		templateUrl: 'view/orders.html',
		controller: 'listOrderController',
		resolve: {
			orders: function (ordersAPI) {
				return ordersAPI.getOrders();
			},
		}
	})

	.otherwise({
		redirectTo: '/beers',
	});


	// remove #
	$locationProvider.html5Mode(true);
});