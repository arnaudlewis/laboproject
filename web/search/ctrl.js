/*global angular*/
/*global console*/

angular.module('app.search')

    .controller('searchCtrl', function ($scope, searchService, $rootScope) {

        console.log('Le module de recherche vient d execute');
        $scope.list = [];

        $rootScope.$on('searchList', function (data) {
            $scope.list = data;
        });

        $scope.submit = function () {
            console.log('La fonction submit de la recherche vient d execute');
            searchService.searchTravel($scope.departure, $scope.arrival, $scope.travelDate);
        };
    });
