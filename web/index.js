/*global angular */
/*global navigator */

angular.module('app', ['app.translation', 'app.router', 'app.login', 'app.remote', 'app.icon', 'app.signin', 'app.header', 'app.alert', 'app.search', 'app.menu', 'app.proposal', 'app.home', 'app.profile', 'app.date', 'app.autocomplete', 'app.price'])

    .run(['translationService', 'menuService', 'iconService', '$rootScope', '$state', function (translationService, menuService, iconService, $rootScope, $state) {
        'use strict';

        var userLang = navigator.language.substr(0, 2) || 'en';
        translationService.getTranslation(userLang);
        iconService.getIcon();
        menuService.setup();

        $state.go('login');
    }]);