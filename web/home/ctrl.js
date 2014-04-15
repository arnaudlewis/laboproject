/*global angular */
/*global window */

angular.module('app.home', [])

    .controller('homeCtrl', function ($scope, $state, $rootScope, $sce, menuService, translationService) {

        $scope.proposalIcon = $sce.trustAsHtml($rootScope.icon.SPEEDOMETER);
        $scope.searchIcon = $sce.trustAsHtml($rootScope.icon.MAGNIFIER);
        $scope.profileIcon = $sce.trustAsHtml($rootScope.icon.PROFILE);
        $scope.historyIcon = $sce.trustAsHtml($rootScope.icon.PAPYRUS);
        $scope.exitIcon = $sce.trustAsHtml($rootScope.icon.EXIT);

        $scope.disconnect = function () {
            if (menuService.isOpen()) {
                menuService.close();
            }
            window.localStorage.clear();
            $state.go('login');
        };

        $scope.redirectToState = function (stateToGo) {
            if (menuService.isOpen()) {
                menuService.close();
            }
            $state.go(stateToGo);
        };

        $scope.changeLanguage = function (language) {
            translationService.change(language);
        };

    });