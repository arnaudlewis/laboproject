/*global angular */
/*global console */

angular.module('app.autocomplete', [])

    .service('autocompleteService', ['$http', '$rootScope', function ($http, $rootScope) {
        'use strict';

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

        return {
            getCities: function (searchParam) {
                loadCities(searchParam);
            }
        };

    }]);