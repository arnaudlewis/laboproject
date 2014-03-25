/*global angular */
angular.module('app.date', [])
    .directive("datepicker", function () {
        'use strict';
        return {
            require: "ngModel",
            restrict: 'E',
            replace: true,
            link: function (scope, element, attr, ngModel) {

                var field = document.getElementById('datepicker');
                var picker = new Pikaday({
                    onSelect: function(date) {
                        field.value = picker.toString();
                    }
                });
                field.parentNode.insertBefore(picker.el, field.nextSibling);
            }
        }
    });