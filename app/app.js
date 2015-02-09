var dep = ['ngRoute', 'app.item','app.directives'];
var app = angular.module('app', dep)
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/menu/:Id', {
            templateUrl: '/app/components/item.html',
            controller: 'appItem'
            //resolve: {
            //    // I will cause a 1 second delay
            //    delay: function($q, $timeout) {
            //        var delay = $q.defer();
            //        $timeout(delay.resolve, 1000);
            //        return delay.promise;
            //    }
            //}
        }).
        otherwise({
            redirectTo: '/',
            templateUrl: '/app/components/item.html'

        });
    ;
}]);
app.controller('appController', ['$scope', '$http', function ($scope, $http) {
    $http.get('/sushi/app/data/information.json').
        success(function (data, status, headers, config) {
            $scope.menu = data;
        }).
        error(function (data, status, headers, config) {
            // or server returns response with an error status.
        });
}]);
