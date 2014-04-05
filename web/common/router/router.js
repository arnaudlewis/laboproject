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
            .state('main.home', {
                url: "/home",
                views: {
                    "mainView@": {
                        templateUrl: "home/index.html"
                    }, "headerView@": {
                        templateUrl: "home/header.html"
                    },
                    "menuView@": {
                        templateUrl: "common/menu/menu.html"
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
                    },
                    "menuView@": {
                        templateUrl: "common/menu/menu.html"
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
                    },
                    "menuView@": {
                        templateUrl: "common/menu/menu.html"
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
                    },
                    "menuView@": {
                        templateUrl: "common/menu/menu.html"
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