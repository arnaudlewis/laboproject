/*global angular */

angular.module('app.result', [])

    .controller('resultCtrl', function ($rootScope, $scope, $sce) {
        'use strict';

        function initResult() {
            $scope.iconDeparture = $sce.trustAsHtml($rootScope.icon.FLAG_START);
            $scope.iconArrival = $sce.trustAsHtml($rootScope.icon.FLAG_END);
            $scope.iconDate = $sce.trustAsHtml($rootScope.icon.CALENDAR);
        }

        initResult();

    });