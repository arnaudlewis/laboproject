/*global angular */
/*global document */
/*global $ */

angular.module('app.menu', [])

    .service('menuService', ['$state', function ($state) {
        'use strict';

        var menu;

        function disconnection() {
            cleanStorage();
            $state.go('login');
        }


        function cleanStorage() {
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
                menu.active('right');
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