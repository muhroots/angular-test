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
		getBeer: _getBeer,
		getBeers: _getBeers,
		saveBeer: _saveBeer,
	};
})