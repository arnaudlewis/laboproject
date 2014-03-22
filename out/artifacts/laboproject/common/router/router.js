/**
 * Created by arnaud on 19/01/2014.
 */

angular.module('app.router', ['ui.router'])

    .config(function ($stateProvider) {
        $stateProvider
            .state('main', {
                abstract: true,
                url: "/main"
            })
            .state('main.login', {
                url: "/login",
                views: {
                    "mainView@": {
                        templateUrl: "login/index.html"
                    }
                }
            })
            .state('main.signin', {
                url: "/signin",
                views: {
                    "mainView@": {
                        templateUrl: "signin/index.html"
                    }
                 }
            });
    });