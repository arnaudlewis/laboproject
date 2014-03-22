/*global angular */
/*global document */
/*global $ */

angular.module('app.menu', [])

    .service('menuService', [function () {
        'use strict';

        var menu;

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
            }
        };
    }]);