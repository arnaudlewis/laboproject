/*global angular */

angular.module('app.header')

    .controller('headerCtrl', ['headerService', 'menuService', '$rootScope', '$scope', '$sce', '$state', function (headerService, menuService, $rootScope, $scope, $sce, $state) {
        'use strict';

        $scope.navBack = $sce.trustAsHtml($rootScope.icon.BACK);
        $scope.navMenu = $sce.trustAsHtml($rootScope.icon.MENU);

        $scope.back = function (stateName) {
            $state.go(stateName);
        };

        $scope.menu = function () {
            if (menuService.isOpen()) {
                menuService.close();

            } else {
                menuService.open();
            }
        }
    }]);