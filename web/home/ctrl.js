/*global angular */

angular.module('app.home', [])

    .controller('homeCtrl', function ($scope, $state, $rootScope, $sce, menuService) {

        $scope.proposalIcon = $sce.trustAsHtml($rootScope.icon.SPEEDOMETER);
        $scope.searchIcon = $sce.trustAsHtml($rootScope.icon.MAGNIFIER);
        $scope.profileIcon = $sce.trustAsHtml($rootScope.icon.PROFILE);
        $scope.historyIcon = $sce.trustAsHtml($rootScope.icon.PAPYRUS);
        $scope.exitIcon = $sce.trustAsHtml($rootScope.icon.EXIT);

        $scope.disconnect = function () {
            menuService.disconnect();
        };

        $scope.redirectToState = function (stateToGo) {
            if (menuService.isOpen()) {
                menuService.close();
            }
            $state.go(stateToGo);
        };

    });