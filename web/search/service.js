/*global angular */
/*global console */

angular.module('app.search', [])
    .service('searchService', ['$http', '$rootScope', function ($http, $rootScope) {
        'use strict';

        function search(departure, arrival, travelDate) {

            departure = {id_city: 1,
                name_city: 'Paris',
                latitude: 145,
                longitude: 145};

            arrival = {id_city: 2,
                name_city: 'Londres',
                latitude: 145,
                longitude: 145};

            /* travelDate = new Date();*/

            $http({
                method: 'POST',
                url: 'rest/travel/search',
                data: {departure: departure, arrival: arrival, travelDate: travelDate}
            })
                .success(function (data) {
                    console.log('envoi de la recherche SUCCESS');
                    console.log(data.searchResultsList);
                    $rootScope.$broadcast('searchList', data);
                    //$rootScope.searchList = data.searchResultsList;
                })
                .error(function (status) {
                    console.log('envoi de la recherche FAILED');
                    //console.log(status);
                });
        }

        return {
            searchTravel: function (departure, arrival, travelDate) {
                search(departure, arrival, travelDate);
            }
        };
    }]);