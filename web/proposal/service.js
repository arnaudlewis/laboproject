/*global angular */
/*global console*/
angular.module('app.proposal', [])

    .service('proposalService', function ($http, $rootScope) {
        'use strict';
        function propose(departure, arrival, travelDate) {
            $http({
                method: 'POST',
                url: 'rest/travel/propose',
                data: {departure: departure, arrival: arrival, travelDate: travelDate }
            })
                .success(function (data) {
                    console.log("Proposition de trajet SUCCESS");
                    $rootScope.$broadcast('travelProposalSUCCESS');
                })
                .error(function (status) {
                    console.log("Proposition de trajet FAILED");
                    $rootScope.$broadcast('travelProposalFAILED');
                });
        }

        return {
            proposeTravel: function (departure, arrival, travelDate) {
                propose(departure, arrival, travelDate);
            }
        };
    });