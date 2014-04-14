/*global angular */
/*global console */

angular.module('app.remote', [])
    .constant('baseUrl', 'http://localhost:8080/laboproject/')

    .config(function ($provide, $httpProvider, baseUrl) {

        // Intercept http calls.
        $provide.factory('RemoteHttpInterceptor', function ($q) {
            return {
                // On request success
                request: function (config) {
                    config.url = baseUrl + config.url;
                    console.log(config); // Contains the data about the request before it is sent.

                    // Return the config or wrap it in a promise if blank.
                    return config || $q.when(config);
                },

                // On request failure
                requestError: function (rejection) {
                    // console.log(rejection); // Contains the data about the error on the request.

                    // Return the promise rejection.
                    return $q.reject(rejection);
                }

            };
        });

        // Add the interceptor to the $httpProvider.
        $httpProvider.interceptors.push('RemoteHttpInterceptor');

    });