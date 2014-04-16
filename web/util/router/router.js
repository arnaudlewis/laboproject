/*global angular */

angular.module('app.router', ['ui.router'])

    .config(function ($stateProvider) {
        'use strict';

        $stateProvider
            .state('main', {
                abstract: true,
                url: "/main"
//                ,
//                views: {
//                    "menuView@": {
//                        templateUrl: "common/menu/menu.html"
//                    }
//                }
            })
            .state('login', {
                url: "/login",
                views: {
                    "mainView@": {
                        templateUrl: "login/index.html"
                    }
                }
            })
            .state('main.home', {
                url: "/home",
                views: {
                    "mainView@": {
                        templateUrl: "home/index.html"
                    },
                    "headerView@": {
                        templateUrl: "home/header.html"
                    }
                }
            })
            .state('main.search', {
                url: "/search",
                views: {
                    "mainView@": {
                        templateUrl: "search/index.html"
                    },
                    "headerView@": {
                        templateUrl: "search/header.html"
                    }
                }
            })

            .state('main.search.result', {
                url: "/result",
                views: {
                    "headerView@": {
                        templateUrl: "result/header.html"
                    },
                    "resultView@main.search": {
                        templateUrl: "result/index.html"
                    }
                }
            })

            .state('main.proposal', {
                url: "/proposal",
                views: {
                    "mainView@": {
                        templateUrl: "proposal/index.html"
                    },
                    "headerView@": {
                        templateUrl: "proposal/header.html"
                    }
                }
            })
            .state('main.profile', {
                url: "/profile",
                views: {
                    "mainView@": {
                        templateUrl: "profile/index.html"
                    },
                    "headerView@": {
                        templateUrl: "profile/header.html"
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
                    }
                }
            });
    });