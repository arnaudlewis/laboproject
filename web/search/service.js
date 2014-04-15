/*global angular */
/*global console */

angular.module('app.search', ['app.result'])
    .service('searchService', ['$http', '$rootScope', 'alertService', function ($http, $rootScope, alertService) {
        'use strict';

        function search(departure, arrival, travelDate) {

            $http({
                method: 'POST',
                url: 'rest/travel/search',
                data: {departure: departure, arrival: arrival, travelDate: travelDate}
            })
                .success(function (data) {
                    //console.log(data.searchResultsList);
                    $rootScope.$broadcast('searchList', data);
                })
                .error(function (status) {
                    console.log('envoi de la recherche FAILED');
                    alertService.showAlert($rootScope.translation.travel_SEARCH_FAILED);
                    //console.log(status);
                });
        }

        return {
            searchTravel: function (departure, arrival, travelDate) {
                search(departure, arrival, travelDate);
            }
        };
    }]);