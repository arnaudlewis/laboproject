/*global angular */
angular.module('app.date', [])
    .directive("datepicker", function () {
        'use strict';
        return {
            restrict: 'E',
            scope: {
                ngModel: '='
            },
            require: "ngModel",
            replace: true,
            templateUrl: 'common/datepicker/datepicker.html',
            link: function (scope, element, attr, ngModel) {

                scope.date = new Date();

                scope.$on('dateSelected', function(event, date) {
                    ngModel.$modelValue = date;
                });

                scope.selectDate = function() {
                    $('#date-selector').focus();
                }

            }
        }
    });