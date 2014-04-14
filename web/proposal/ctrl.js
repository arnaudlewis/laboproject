/*global angular */
/*global console*/
/*global $ */
/*global window */

angular.module('app.proposal')
    .controller('proposalCtrl', function ($scope, proposalService, alertService, $timeout, $state, $rootScope) {
        'use strict';

        function initProposal() {
            $scope.user = JSON.parse(window.localStorage.user);
        }

        initProposal();

        $scope.submit = function () {
            if ($scope.arrival && $scope.departure && $scope.travelDate) {
                proposalService.proposeTravel($scope.departure, $scope.arrival, $scope.travelDate);
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