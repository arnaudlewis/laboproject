/*global angular */
/*global console*/
/*global window */

angular.module('app.proposal', [])

    .service('proposalService', function ($http, $rootScope) {
        'use strict';
        function propose(travel, preference, user) {
            preference.animal = preference.animal ? 1 : 0;
            preference.smoke = preference.smoke ? 1 : 0;
            $http({
                method: 'POST',
                url: 'rest/travel/propose',
                data: {travel: travel, preference: preference, user: user}
            })
                .success(function (data) {
                    if (data.id_travel !== -1) {
                        $rootScope.$broadcast('travelProposalSUCCESS');
                    } else {
                        $rootScope.$broadcast('travelProposalFAILED');
                    }

                })
                .error(function (status) {
                    $rootScope.$broadcast('travelProposalFAILED');
                });
        }

        return {
            proposeTravel: function (travel, preference, user) {
                propose(travel, preference, user);
            }
        };
    });