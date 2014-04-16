/*global angular */

angular.module('app.result')

    .directive('itemResult', function ($sce, $rootScope) {
        'use strict';
        return {
            restrict: 'E',
            require: 'ngModel',
            scope: {
                ngModel: '='
            },
            templateUrl: 'result/item-result/item-result.html',
            link: function (scope, element, attrs, ngModel) {

                function calculateAge(birthday) {
                    var ageDifMs = Date.now() - birthday.getTime();
                    var ageDate = new Date(ageDifMs); // miliseconds from epoch
                    return Math.abs(ageDate.getUTCFullYear() - 1970);
                }

                var model = scope.ngModel;

                scope.iconDeparture = $sce.trustAsHtml($rootScope.icon.FLAG_START);
                scope.iconProfile = $sce.trustAsHtml($rootScope.icon.PROFILE);
                scope.iconArrival = $sce.trustAsHtml($rootScope.icon.FLAG_END);
                var iconSex = model.driver.sex ? $rootScope.icon.FEMALE : $rootScope.icon.MALE;
                scope.iconSex = $sce.trustAsHtml(iconSex);
                scope.age = calculateAge(new Date(model.driver.birthdate));
                scope.translation = $rootScope.translation;

                scope.result = model;

            }
        };
    });
