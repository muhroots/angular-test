angular.module('beer').controller('detailsBeerController', function ($scope, beer) {
    $scope.beer = beer.data;
});