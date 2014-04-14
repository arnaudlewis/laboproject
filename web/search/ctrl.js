/*global angular*/
/*global console*/

angular.module('app.search')

    .controller('searchCtrl', function ($scope, searchService, $rootScope, alertService) {
        'use strict';
        console.log('Le module de recherche vient d execute');
        $scope.list = [];

        $rootScope.$on('searchList', function (data) {
            $scope.list = data;
        });

        $scope.submit = function () {

            if ($scope.arrival && $scope.departure && $scope.travelDate) {
                searchService.searchTravel($scope.departure, $scope.arrival, $scope.travelDate);
            } else {
                alertService.showAlert($rootScope.translation.WARNING_VALIDATION);
            }
        };
    });
