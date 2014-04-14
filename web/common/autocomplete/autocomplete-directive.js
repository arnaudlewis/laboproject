/*global angular */

angular.module('app.autocomplete')

    .directive('autocomplete', function (autocompleteService, $rootScope, $sce) {
        'use strict';
        return {
            restrict: 'E',
            require: 'ngModel',
            scope: {
                ngModel: '='
            },
            templateUrl: 'common/autocomplete/autocomplete.html',
            link: function (scope, element, attrs, ngModel) {

                scope.label = attrs.label;
                scope.placeholder = $rootScope.translation.SELECT_CITY;
                scope.icon = $sce.trustAsHtml(attrs.icon);

                scope.activateAutocomplete = function () {
                    autocompleteService.activateAutocomplete(scope);
                };

                scope.$on('selectedCity', function (event, city) {
                    scope.ngModel = ngModel = city;
                });


            }
        };
    });
