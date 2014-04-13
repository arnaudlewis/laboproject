/*global angular */

angular.module('app.date', [])

    .directive('date', function ($filter) {
        'use strict';
        return {
            restrict: 'E',
            require: 'ngModel',
            scope: {
                ngModel: '='
            },
            template: '<input class="date-selector" ng-model="ngModel" min="{{ actual }}" ng-change="selectDate()" type="date" />',
            link: function (scope, element, attrs, ngModel) {

                scope.actual = $filter("date")(Date.now(), 'yyyy-MM-dd');
                scope.ngModel = scope.actual;
                scope.selectDate = function () {
                    if (scope.ngModel < scope.actual) {
                        scope.ngModel = scope.actual;
                    }
                    ngModel = new Date(scope.ngModel);
                };
            }
        };
    });
