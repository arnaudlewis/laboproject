/*global angular */

angular.module('app.search', [])
    .service('searchService', ['$http', '$rootScope', function ($http, $rootScope) {
        'use strict';

        function search(departure, arrival, journey_date) {
            $http({
                method: 'POST',
                url: 'rest/journey/insert',
                data: {departure: departure, arrival: arrival, journey_date: journey_date}
            })
                .success(function (data, status) {
                    console.log('envoi de la recherche SUCCESS');
                    console.log(data.id_journey);
                    $rootScope.$broadcast('SearchList', data);
                    console.log(status);
                })
                .error(function (status) {
                    console.log('envoi de la recherche FAILED');
                    console.log(status);
                });
        }

        return {
            searchJourney: function (departure, arrival, journey_date) {
                search(departure, arrival, journey_date);
            }
        };
    }]);