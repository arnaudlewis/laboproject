/*global angular */
/*global $ */

angular.module('app.alert')

    .controller('alertCtrl', [ '$rootScope', '$scope', '$timeout', '$sce', function ($rootScope, $scope, $timeout, $sce) {
        'use strict';

        $scope.$on('showMessage', function (event, icon, message) {

            var alert = $("#windowAlert");

            $scope.iconAlert = $sce.trustAsHtml($rootScope.icon.USER);
            $scope.message = message;
            alert.fadeIn();
            $timeout(function () {
                alert.fadeOut();
            }, 2000);

        });
    }]);