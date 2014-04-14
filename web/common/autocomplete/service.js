/*global angular */
/*global console */
/*global $ */

angular.module('app.autocomplete', [])

    .service('autocompleteService', ['$http', '$rootScope', function ($http, $rootScope) {
        'use strict';

        var currentScope;

        function loadCities(searchParam) {
            $http({
                method: 'POST',
                url: "rest/city/load",
                data: {searchParam: searchParam}
            })
                .success(function (data) {
                    $rootScope.$broadcast('citiesLoaded', data);
                })

                .error(function (data, status, headers, config) {
                    console.log('erreur de récupération des villes');
                });
        }

        function activate(scope) {
            currentScope = scope;
            var autocompleteSearch = $('#autocomplete-search');
            autocompleteSearch.val('');
            $('#autocomplete').fadeIn();
            autocompleteSearch.focus();
        }


        return {
            getCities: function (searchParam) {
                loadCities(searchParam);
            },

            activateAutocomplete: function (scope) {
                activate(scope);
            },

            desactivateAutocomplete: function () {
                $('#autocomplete').fadeOut();
            },

            selectCity: function (city) {
                this.desactivateAutocomplete();
                currentScope.$broadcast('selectedCity', city);
            }
        };

    }]);
