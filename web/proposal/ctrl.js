/*global angular */

angular.module('app.proposal')
    .controller('proposalCtrl', ['$scope', function ($scope) {
        'use strict';

        $scope.items = [
            {
                name_city: "Ville 1"
            },
            {
                name_city: "Ville 2"
            },
            {
                name_city: "Ville 3"
            },
            {
                name_city: "Ville 4"
            }

        ];

    }])
;