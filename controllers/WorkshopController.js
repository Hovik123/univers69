angular.module("App").controller("WorkshopController",function ($scope,$http) {
    $http({
        method: 'GET',
        url: '/data/workshop.json'
    }).then(function successCallback(response) {
        $scope.data=response.data.data.works;
        console.log($scope.data);
    }, function errorCallback(response) {
        throw new response;
    });
    $scope.owlOptions={
        slideSpeed: 350,
        singleItem: !0,
        navigation: !0,
        autoHeight : true,
        navigationText: ["<span class='icon icon-arrows-left'></span>", "<i class='icon icon-arrows-right'></span>"]
    }
});