/*global angular */

angular.module('app.proposal')
    .controller('proposalCtrl', ['$scope', 'autocompleteService', function ($scope, autocompleteService) {
        'use strict';

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
    }]);