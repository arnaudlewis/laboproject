/*global angular */
/*global console */

angular.module('app.signin', ['angular-md5', 'app.header'])

    .service('signinService', function ($rootScope, $http) {
        'use strict'; // pour JSLint
        function create(creationDate, nom, prenom, mail, birthday, username, password) {
            console.log('la creation d utilisateur vient d etre execute');
            $http({
                method: 'POST',
                url: 'rest/user/signin',
                data: {creationDate: creationDate, lastname: nom, firstname: prenom, email: mail, birthday: birthday, username: username, password: password}
            })
                .success(function (data) {
                    if (data.id_user) {
                        console.log('creation d utilisateur REUSSI');
                        $rootScope.$broadcast("User creation successfull");
                    } else {
                        console.log('creation d utilisateur ECHEC');
                        $rootScope.$broadcast("User creation failed");
                    }
                })
                .error(function (status) {
                    console.log('echec de la requête');
                    console.log(status);
                });

        }

        return {
            createUser: function (creationDate, nom, prenom, mail, birthday, username, password) {
                create(creationDate, nom, prenom, mail, birthday, username, password);
            }
        };
    });