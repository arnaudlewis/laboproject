/**
 * Created by oliver on 27/02/14.
 */

angular.module('app.signin', ['angular-md5'])

    .service('signinService',function($rootScope, $http){

        function create(creationDate,nom,prenom,mail,age,username,password){
            $http({
                method:'POST',
                url:'/rest/user/signin',
                data:{creationDate: creationDate, nom: nom, prenom: prenom, mail: mail, age: age, username: username, password: password}
            }).success()


                .error()

        }





    }])