/*global angular */
/*global window */

angular.module('app.login', ['angular-md5'])

    .service('loginService', ['$rootScope', '$http', 'md5', function ($rootScope, $http, md5) {
        'use strict';

        function write(data) {
            window.localStorage.firstname = data.firstname;
            window.localStorage.lastname = data.lastname;
            window.localStorage.username = data.username;
            window.localStorage.email = data.email;
            window.localStorage.birthdate = data.birthdate;
            window.localStorage.creationDate = data.creationDate;
            window.localStorage.id_user = data.id_user;
        }

        function loginRequestServer(username, password) {
            $http({
                method: 'POST',
                url: "rest/user/connect",
                data: {username: username, password: md5.createHash(password)}
            })
                .success(function (data) {
                    $rootScope.connect = data.connect;
                    if (data.username !== null) {
                        write(data);
                        $rootScope.$broadcast('loggedUser');
                    } else {
                        $rootScope.$broadcast('loginFailed');
                    }
                })

                .error(function (data, status, headers, config) {
                    $rootScope.$broadcast('loginFailed');
                });
        }

        return {
            login: function (username, password) {
                loginRequestServer(username, password);
            }
        };
    }]);