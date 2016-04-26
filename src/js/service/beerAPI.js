angular.module('beer').factory('beersAPI', function ($http, config) {
	var _getBeers = function () {
		return $http.get(config.baseURL + '/beers.json');
	};

	var _getBeer = function (id) {
		return $http.get(config.baseURL + '/beers.json');
	};

	var _saveBeer = function (beer) {
		return $http.post(config.baseURL + '/beers', beer);
	};

	return {
		getBeers: _getBeers,
		getBeer: _getBeer,		
		saveBeer: _saveBeer,
	};
})