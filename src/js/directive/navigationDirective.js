 angular.module('beer').directive('currentNavigation', ['$location', function($location) {
	return {
		restrict: 'A',
		link: function(scope, element) {
			scope.location = $location;

			scope.$watch('location.path()', function(currentPath) {
				var page = currentPath.split('/');

				if('/' + page[1] === element[0].attributes['href'].nodeValue) {
					element.addClass('current');
				} else {
					element.removeClass('current');
				}
			});
		}
	};
}]);