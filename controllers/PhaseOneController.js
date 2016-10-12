angular.module("App").controller("PhaseOneController",function ($scope,$http) {
    $http({
        method: 'GET',
        url: '/data/phase1.json'
    }).then(function successCallback(response) {
        $scope.datas=response.data.data;
        console.log(response.data.data);
    }, function errorCallback(response) {
        throw new response;
    });
});