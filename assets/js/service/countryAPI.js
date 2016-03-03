angular.module('beer').service('countriesAPI', function ($http, config) {
	this.getCountries = function () {
		return $http.get(config.baseURL + '/country.json');
	};
});