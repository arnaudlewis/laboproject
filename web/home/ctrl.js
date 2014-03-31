angular.module('app.home', [])

    .controller('homeCtrl', function ($scope, $rootScope, $sce, menuService) {

        $scope.proposalIcon = $sce.trustAsHtml($rootScope.icon.SPEEDOMETER);
        $scope.searchIcon = $sce.trustAsHtml($rootScope.icon.MAGNIFIER);
        $scope.profileIcon = $sce.trustAsHtml($rootScope.icon.PROFILE);
        $scope.historyIcon = $sce.trustAsHtml($rootScope.icon.PAPYRUS);
        $scope.exitIcon = $sce.trustAsHtml($rootScope.icon.EXIT);

        $scope.disconnect = function () {
            menuService.disconnect();
        };

    });