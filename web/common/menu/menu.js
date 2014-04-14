/*global angular */
/*global document */
/*global $ */

angular.module('app.menu', [])

    .service('menuService', ['$state', '$rootScope', function ($state, $rootScope) {
        'use strict';

        var menu;

        function disconnection() {
            cleanUserData();
            $state.go('login');
        }


        function cleanUserData() {
            $rootScope.currentUser = null;
            window.localStorage.clear();

        }

        function setupMenu() {
            menu = new $.slidebars();
        }

        return {
            setup: function () {
                setupMenu();
            },

            isOpen: function () {
                return menu.active('right');
            },

            open: function () {
                menu.open('right');
            },

            close: function () {
                menu.close();
            },

            disconnect: function () {
                disconnection();
            }
        };
    }]);