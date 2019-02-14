'use strict';
 
angular.module('Home')
 
.controller('HomeController',
    ['$scope','$http',
    function ($scope,$http) {


        function _getBanners() {


            $scope.testBanners = [];


            $http({
                method: 'GET', url: 'https://demo.evona.ba:3100/banners/0', headers: { 'TerminalId': '2222' }
            }).then(function successCallback(response) {

                var banner = response.data.Result;

                for (var i = 0; i < banner.length; i++) {


                    $scope.testBanners.push(banner[i]);
                }


            }, function errorCallback(response) {



            });
        }

        _getBanners();
    }]);