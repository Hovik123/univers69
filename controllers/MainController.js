angular.module("App").controller("MainController",function ($scope,$http) {
    $http({
        method: 'GET',
        url: '/data/menu.json'
    }).then(function successCallback(response) {
        $scope.phase1=response.data.phasa1;
        $scope.phase2=response.data.phasa2;
    }, function errorCallback(response) {
        throw new response;
    });
});