/*global angular */

angular.module('app.translation', ['ngResource'])


    .service('translationService', ['$rootScope', '$resource', '$state', function ($rootScope, $resource, $state) {
        'use strict';

        function initLang(language) {
            var languageFilePath = 'util/translation/translation_' + language + '.json';
            $resource(languageFilePath).get(function (data) {
                $rootScope.translation = data;
            });
        }

        return {
            getTranslation: function (language) {
                initLang(language);
            },

            change: function (language) {
                initLang(language);
                $state.go('main.home');
            }
        };

    }]);