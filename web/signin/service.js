/*global angular */
/*global console */

angular.module('app.signin', ['angular-md5', 'app.header'])

    .service('signinService', function ($rootScope, $http, md5) {
        'use strict'; // pour JSLint
        function create(creationDate, sex, nom, prenom, mail, birthday, username, password) {
            console.log('la creation d utilisateur vient d etre execute');
            $http({
                method: 'POST',
                url: 'rest/user/signin',
                data: {creationDate: creationDate, sex: sex, lastname: nom, firstname: prenom, email: mail, birthday: birthday, username: username, password: md5.createHash(password)}
            })
                .success(function (data) {
                    data.id_user !== -1 ? $rootScope.$broadcast("signinSuccess") : $rootScope.$broadcast("signinFailed", data.usernameExist, data.emailExist);
                })
                .error(function (status) {
                    $rootScope.$broadcast("requestFailed");
                    console.log('echec de la requête');
                    console.log(status);
                });

        }

        return {
            createUser: function (creationDate, sex, nom, prenom, mail, birthday, username, password) {
                create(creationDate, sex, nom, prenom, mail, birthday, username, password);
            }
        };
    });