angular.module("App").controller("ContactController",function ($scope,$http) {

    $http({
        method: 'POST',
        url: '/sendmail.php'
    }).then(function successCallback(response) {
        console.log(response.data);
    }, function errorCallback(response) {
        throw new response;
    });
});