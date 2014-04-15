/*global angular */
/*global console*/
/*global $ */
/*global window */

angular.module('app.proposal')
    .controller('proposalCtrl', function ($scope, proposalService, alertService, $timeout, $state, $rootScope) {
        'use strict';

        function initProposal() {
            $scope.user = JSON.parse(window.localStorage.user);
            $scope.preference = { animal: $scope.user.driverPreferences.animal, smoke: $scope.user.driverPreferences.smoke};
        }

        initProposal();

        $scope.submit = function () {
            if ($scope.travel.price.length === 0) {
                $scope.travel.price = 0;
            }
            if ($scope.travel.arrival && $scope.travel.departure && $scope.travel.travelDate) {
                proposalService.proposeTravel($scope.travel, $scope.preference, $scope.user);
            } else {
                alertService.showAlert($rootScope.translation.WARNING_VALIDATION);
            }
        };

        $scope.$on('travelProposalSUCCESS', function (event) {
            alertService.showSuccess('Travel Proposal SUCCESS');

            $timeout(function () {
                $state.go('main.home');
            }, 2000);
        });

        $scope.$on('travelProposalFAILED', function (event) {
            alertService.showError('Travel Proposal FAILED');
        });

    });