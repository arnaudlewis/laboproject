/**
 * Created by oliver on 09/03/14.
 */

angular.module('app.search')

    .controller('searchCtrl', function ($scope, searchService) {
        console.log('Le module de recherche vient d execute');
        $scope.submit = function () {
            console.log('La fonction submit de la recherche vient d execute');
//            searchService.searchJourney($scope.departure, $scope.arrival, $scope.journey_date);
        };
    });