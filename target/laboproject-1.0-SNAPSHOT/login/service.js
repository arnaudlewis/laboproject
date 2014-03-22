/*global angular */
/*global window */

angular.module('app.login', ['angular-md5'])

    .service('loginService', ['$rootScope', '$http', 'md5', function ($rootScope, $http, md5) {
        'use strict';

        function write(data) {
            window.localStorage.user.firstname = data.firstname;
            window.localStorage.user.lastname = data.lastname;
            window.localStorage.user.username = data.username;
            window.localStorage.user.email = data.email;
            window.localStorage.user.birthdate = data.birthdate;
            window.localStorage.user.creationDate = data.creationDate;
        }

        function loginRequestServer(username, password) {
            $http({
                method: 'POST',
                url: "rest/user/connect",
                data: {username: username, password: md5.createHash(password)}
            }).
                success(function (data) {
                    $rootScope.connect = data.connect;
                    if (data === null) {
                        write(data);
                        $rootScope.$broadcast('loggedUser');
                    } else {
                        $rootScope.$broadcast('loginFailed');
                    }
                }).
                error(function (data, status, headers, config) {
                    $rootScope.$broadcast('loginFailed');
                });
        }

        return {
            login: function (username, password) {
                loginRequestServer(username, password);
            }
        };
    }]);