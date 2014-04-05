/*global angular */
/*global console */
/*global $ */

angular.module('app.autocomplete', [])

    .service('autocompleteService', ['$http', '$rootScope', 'DEPARTURE', 'ARRIVAL', function ($http, $rootScope, DEOARTURE, ARRIVAL) {
        'use strict';

        var typeOfAutocomplete;

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

        function activate() {
            var autocompleteSearch = $('#autocomplete-search');
            autocompleteSearch.val('');
            $('#autocomplete').fadeIn();
            autocompleteSearch.focus();
        }


        return {
            getCities: function (searchParam) {
                loadCities(searchParam);
            },

            activateAutocompleteDeparture: function () {
                typeOfAutocomplete = "DEPARTURE";
                activate();
            },

            activateAutocompleteArrival: function (arrival) {
                typeOfAutocomplete = "ARRIVAL";
                activate();
            },

            desactivateAutocomplete: function () {
                $('#autocomplete').fadeOut();
            },

            getTypeOfAutocomplete: function () {
                return typeOfAutocomplete;
            }
        };

    }]);
