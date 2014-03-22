/*global angular */

angular.module('app.alert', [])

    .service('alertService', [ '$rootScope', function ($rootScope) {
        'use strict';

        function show(type, message) {

            var icon = "icon en svg";
            $rootScope.$broadcast('showMessage', icon, message);
            //dans le controller afficher message avec icon grace à $sce
            //alert en display none de base donc faire un fadein
            //faire un timeout pour que l'alerte disparaisse en fade out
        }

        return {

            showAlert: function (message) {
                show('ALERT', message);
            },

            showSuccess: function (message) {
                show('SUCCESS', message);
            },

            showError: function (message) {
                show('ERROR', message);
            }
        };
    }]);