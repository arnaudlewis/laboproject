/*global angular*/
/*global console*/

angular.module('app.search')

    .controller('searchCtrl', function ($scope, searchService, $rootScope, alertService, $state) {
        'use strict';
        console.log('Le module de recherche vient d execute');
        $scope.list = [];

        $scope.$on('searchList', function (event, data) {
            $scope.list = data;
            if ($scope.list.length === 0) {
                alertService.showAlert($rootScope.translation.search_NO_RESULT);
            } else {
                $state.go('main.search.result');
            }
        });

        $scope.submit = function () {

            if ($scope.arrival && $scope.departure && $scope.travelDate) {
                searchService.searchTravel($scope.departure, $scope.arrival, $scope.travelDate);
            } else {
                alertService.showAlert($rootScope.translation.WARNING_VALIDATION);
            }
        };
    });
