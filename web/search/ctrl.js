/*global angular*/
/*global console*/

angular.module('app.search')

    .controller('searchCtrl', function ($scope, searchService, $rootScope, autocompleteService) {
        'use strict';
        console.log('Le module de recherche vient d execute');
        $scope.list = [];

        $rootScope.$on('searchList', function (data) {
            $scope.list = data;
        });

        $scope.submit = function () {
            console.log('La fonction submit de la recherche vient d execute');
            searchService.searchTravel($scope.departure, $scope.arrival, $scope.travelDate);
        };

        $scope.departure = $scope.arrival = {name_city: '____'};

        $scope.activateAutocompleteDeparture = function () {
            autocompleteService.activateAutocompleteDeparture();
        };

        $scope.activateAutocompleteArrival = function () {
            autocompleteService.activateAutocompleteArrival();
        };

        $scope.$on('departureCitySelected', function (event, city) {
            $scope.departure = city;
        });

        $scope.$on('arrivalCitySelected', function (event, city) {
            $scope.arrival = city;
        });
    });
