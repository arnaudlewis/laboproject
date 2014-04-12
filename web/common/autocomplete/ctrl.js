/*global angular */
/*global $ */

angular.module('app.autocomplete')

    .constant('DEPARTURE', 'DEPARTURE')
    .constant('ARRIVAL', 'ARRIVAL')
    .constant('STOPOVER', 'STOPOVER')

    .controller('autocompleteCtrl', ['$scope', 'autocompleteService', '$rootScope', function ($scope, autocompleteService, $rootScope) {
        'use strict';

        function resetAutocomplete() {
            $scope.results = {};
            $scope.searchParam = '';
        }


        $scope.activateAutocompleteDeparture = function () {
            autocompleteService.activateAutocompleteDeparture();
        };

        $scope.activateAutocompleteArrival = function () {
            autocompleteService.activateAutocompleteArrival();
        };

        $scope.searchParam = '';

        $scope.desactivateAutocomplete = function () {
            autocompleteService.desactivateAutocomplete();
            resetAutocomplete();
        };

        $scope.loadResults = function () {
            if ($scope.searchParam === '') {
                $scope.results = [];
            } else {
                autocompleteService.getCities($scope.searchParam);
            }
        };

        $scope.$on('citiesLoaded', function (event, data) {
            $scope.results = data;
        });

        $scope.selectCity = function (city) {
            resetAutocomplete();
            var typeOfAutocomplete = autocompleteService.getTypeOfAutocomplete();
            autocompleteService.desactivateAutocomplete();
            if (typeOfAutocomplete === "DEPARTURE") {
                $rootScope.$broadcast('departureCitySelected', city);
            } else if (typeOfAutocomplete === "ARRIVAL") {
                $rootScope.$broadcast('arrivalCitySelected', city);
            }

        };
    }]);
