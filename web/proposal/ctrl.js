/*global angular */
/*global console*/

angular.module('app.proposal')
    .controller('proposalCtrl', function ($scope, autocompleteService, proposalService, alertService, $timeout, $state) {
        'use strict';

        $scope.submit = function () {
            console.log("Le module de proposition vient d etre execute");
            proposalService.proposeTravel($scope.departure, $scope.arrival, $scope.travelDate);
        };

        $scope.departure = $scope.arrival = {name_city: '____'};

        $scope.$on('departureCitySelected', function (event, city) {
            $scope.departure = city;
            $scope.formValidation();
        });

        $scope.$on('arrivalCitySelected', function (event, city) {
            $scope.arrival = city;
            $scope.formValidation();
        });

        $scope.$on('travelProposalSUCCESS', function (event) {
            alertService.showSuccess('Travel Proposal SUCCESS');

            $timeout(function () {
                $state.go('main.home');
            }, 2000);
        });

        $scope.$on('travelProposalFAILED', function (event) {
            alertService.showError('Travel Proposal FAILED');
        });

        $scope.formValidation = function () {
            var btnProposal = $('#btn-proposal');

            if ($scope.arrival !== null && $scope.departure !== null || $scope.travelDate) {
                btnProposal.removeAttr('disabled');
                btnProposal.removeClass('disabled');
            } else {
                btnProposal.prop('disabled', true);
                btnProposal.addClass('disabled');
            }
        };
        //$scope.departure = $scope.arrival = null;


    });