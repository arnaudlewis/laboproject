/*global angular */

angular.module('app.price', [])

    .directive('price', function ($sce, $rootScope) {
        'use strict';
        return {
            restrict: 'E',
            require: 'ngModel',
            scope: {
                ngModel: '='
            },
            templateUrl: 'common/price/price.html',
            link: function (scope, element, attrs, ngModel) {

                scope.label = attrs.label;
                scope.icon = $sce.trustAsHtml(attrs.icon);
                scope.ngModel = 0;

            }
        };
    });
