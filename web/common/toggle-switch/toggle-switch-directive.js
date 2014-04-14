angular.module('app.toggle-switch', ['ng'])

    .directive('toggleSwitch', function () {
        'use strict';
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                model: '=',
                disabled: '@',
                onLabel: '@',
                offLabel: '@',
                knobLabel: '@'
            },
            template: '<div class="switch" ng-click="toggle()" ng-class="{ \'disabled\': disabled }"><div class="switch-animate" ng-class="{\'switch-off\': !model, \'switch-on\': model}"><span class="switch-left" ng-bind="onLabel"></span><span class="knob" ng-bind="knobLabel"></span><span class="switch-right" ng-bind="offLabel"></span></div></div>',
            controller: function ($scope) {
                $scope.toggle = function toggle() {
                    if (!$scope.disabled) {
                        $scope.model = !$scope.model;
                    }
                };
            },
            compile: function (element, attrs) {
                if (!attrs.onLabel) {
                    attrs.onLabel = '';
                }
                if (!attrs.offLabel) {
                    attrs.offLabel = '';
                }
                if (!attrs.knobLabel) {
                    attrs.knobLabel = '';
                }
                if (!attrs.disabled) {
                    attrs.disabled = false;
                }
            }
        };
    });
