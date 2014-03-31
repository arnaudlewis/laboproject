/*global angular */
/*global $ */
angular.module('app.autocomplete')
    .directive("autocomplete", ['autocompleteService', function (autocompleteService) {
        'use strict';
        return {
            restrict: 'E',
            scope: {
                ngModel: '='
            },
            require: "ngModel",
            replace: true,
            templateUrl: 'common/autocomplete/index.html',
            link: function (scope, element, attr, ngModel) {

                scope.placeholder = attr.placeholder;

                scope.proceedAutocomplete = function () {
                    var searchParam = $('.selected-autocomplete').val();
                    if (searchParam.length > 0) {
                        autocompleteService.getCities(searchParam);
                        scope.param = true;
                    } else {
                        scope.items = [];
                        scope.param = false;
                    }
                };

                scope.$on('citiesLoaded', function (event, data) {
                    scope.items = data;
                });
            }
        };
    }]);