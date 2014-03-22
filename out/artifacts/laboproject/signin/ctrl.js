/**
 * Created by oliver on 27/02/14.
 */

angular.module('app.signin')

    .controller('signinCtrl', function (md5, signinService, scope) {

        function signinController($scope) {

            $scope.submit = function () {
                console.log('submit vient d etre execute');
                var creationdate = new Date();
                signinService.createUser(creationDate, $scope.nom, $scope.prenom, $scope.mail, $scope.age, $scope.username, $scope.password);
            };
        }
    });