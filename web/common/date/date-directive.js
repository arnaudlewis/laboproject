/*global angular */

angular.module('app.date', [])

    .directive('date', function ($filter) {
        'use strict';
        return {
            restrict: 'E',
            require: 'ngModel',
            scope: {
                ngModel: '=',
                free: '='
            },
            template: '<input class="date-selector" ng-model="ngModel" min="{{ min }}" ng-change="selectDate()" type="date" />',
            link: function (scope, element, attrs, ngModel) {

                scope.actual = $filter("date")(Date.now(), 'yyyy-MM-dd');

                if (!scope.free) {
                    scope.min = scope.actual;
                }
                scope.ngModel = scope.actual;

                scope.selectDate = function () {
                    if (!scope.free && scope.ngModel < scope.actual) {
                        scope.ngModel = scope.actual;
                    }
                    ngModel = new Date(scope.ngModel);
                };
            }
        };
    });
