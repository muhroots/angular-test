angular.module('beer').directive('uiModal', function () {
    return {
        templateUrl: 'view/ui/modal.html',
        replace: true,
        restrict: 'AE',
        scope: {
            title: "@",
        },
        transclude: true,
    };
});