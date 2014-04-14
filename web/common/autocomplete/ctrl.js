/*global angular */
/*global $ */

angular.module('app.autocomplete')

    .controller('autocompleteCtrl', ['$scope', 'autocompleteService', '$rootScope', function ($scope, autocompleteService, $rootScope) {
        'use strict';

        function resetAutocomplete() {
            $scope.results = {};
            $scope.searchParam = '';
        }

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
            autocompleteService.selectCity(city);

        };

    }]);
