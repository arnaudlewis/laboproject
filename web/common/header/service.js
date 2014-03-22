/*global angular */

angular.module('app.header', [])

    .service('headerService', ['$rootScope', function ($rootScope) {
        'use strict';


        function setupMenu(navLeft, title, navRight) {
            $rootScope.$broadcast('setupHeader', navLeft, title, navRight);
        }

        return {
            setup: function (navLeft, title, navRight) {
                setupMenu(navLeft, title, navRight);
            }
        };
    }]);