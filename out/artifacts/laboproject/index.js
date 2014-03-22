angular.module('app', ['app.translation', 'app.router'])

    .run(['translationService', '$rootScope', '$state', function (translationService, $rootScope, $state) {
        'use strict';

        var userLang = navigator.language.substr(0, 2) || 'en';
        translationService.getTranslation(userLang);

        $state.go('main.signin');
    }]);