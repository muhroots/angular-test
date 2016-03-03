angular.module('beer').directive('uiAlert', function () {
    return {
        templateUrl: 'view/ui/alert.html',
        replace: true,
        restrict: 'AE',
        scope: {
            title: '@',
            message: '@',
        },
        transclude: true,
    };
});