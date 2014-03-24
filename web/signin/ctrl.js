/*global angular */
/*global console */

angular.module('app.signin')

    .controller('signinCtrl', function (md5, $rootScope, signinService, $scope, headerService) {
        'use strict'; // pour JSLint
        $scope.submit = function () {
            console.log('submit vient d etre execute');
            var creationDate = new Date();
            signinService.createUser(creationDate, $scope.lastname, $scope.firstname, $scope.email, $scope.birthday, $scope.username, $scope.password);
        };

        headerService.setup('BACK', $rootScope.translation.signin_TITLE, 'MENU');

    });