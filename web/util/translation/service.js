/*global angular */

angular.module('app.translation', ['ngResource'])


    .service('translationService', ['$rootScope', '$resource', function ($rootScope, $resource) {
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
            }
        };

    }]);