angular.module("App").controller("PortfolioController",function ($scope,$http,$stateParams,$location) {
    $http({
        method: 'GET',
        url: '/data/portfolio.json'
    }).then(function successCallback(response) {
        if(response.data.data[$stateParams.name]){
            if(!response.data.data[$stateParams.name]["p"+$stateParams.phase]){
                $location.path("/");
            }else{
                $scope.data=response.data.data[$stateParams.name]["p"+$stateParams.phase];
                if(!$scope.data){
                    $location.path("/");
                }
            }

        }else{
            $location.path("/");
        }

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