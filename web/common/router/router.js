/*global angular */

angular.module('app.router', ['ui.router'])

    .config(function ($stateProvider) {
        'use strict';

        $stateProvider
            .state('main', {
                abstract: true,
                url: "/main"
            })
            .state('login', {
                url: "/login",
                views: {
                    "mainView@": {
                        templateUrl: "login/index.html"
                    }
                }
            })
            .state('main.search', {
                url: "/search",
                views: {
                    "mainView@": {
                        templateUrl: "search/index.html"
                    }
                }
            })

            .state('main.search.date', {
                url: "/date",
                views: {
                    "searchView@main.search": {
                        templateUrl: "search/date/index.html"
                    }
                }
            })
//            .state('display', {
//                url: "/result/display",
//                views: {
//                    "mainView@": {
//                        templateUrl: "display/index.html"
//                    }
//                }
//            })
            .state('main.signin', {
                url: "/signin",
                views: {
                    "mainView@": {
                        templateUrl: "signin/index.html"
                    },
                    "headerView@": {
                        templateUrl: "signin/header.html"
                    },
                    "menuView@": {
                        templateUrl: "common/menu/menu.html"
                    }
                }
            });
    });