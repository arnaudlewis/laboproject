/*global angular */

angular.module('app.alert', [])

    .service('alertService', [ '$rootScope', function ($rootScope) {
        'use strict';

        function show(type, message) {
            var icon;

            switch(type) {
                case 'ALERT': icon = $rootScope.icon.WARNINGMARK;
                    break;
                case 'SUCCESS': icon = $rootScope.icon.CHECKMARK;
                    break;
                case 'ERROR': icon = $rootScope.icon.ERRORMARK;
            }

            $rootScope.$broadcast('showMessage', icon, message);
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