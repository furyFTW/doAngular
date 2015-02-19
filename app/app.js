var dep = ['ngRoute', 'app.item'];
var app = angular.module('app', dep).
    service('orderService', function () {
        var order = [];
        this.addOrder = function (num) {
            order.push(num);
            return order;
        };
        this.deleteOrder = function (id) {
            order = [];
            return this.list();
        };
        this.list = function () {
            return order;
        };

    }).
    controller('appController', ['$scope', '$http', 'orderService', function ($scope, $http, orderService) {
        $scope.myOrder = orderService.list();
        $http.get('/sushi/app/data/information.json').
            success(function (data) {
                $scope.menu = data;
            }).
            error(function (data) {
                // or server returns response with an error status.
            });
        $scope.delete = function () {
            $scope.myOrder = orderService.deleteOrder();
        };
        $scope.addToCard = function (id) {
            $scope.myOrder = orderService.addOrder(id);
            console.log($scope.myOrder)
        };
    }]);

//app.config(['$routeProvider', function ($routeProvider) {
//    $routeProvider
//        .when('/menu/:Id', {
//            templateUrl: '/app/components/item.html',
//            controller: 'appItem'
//            //resolve: {
//            //    // I will cause a 1 second delay
//            //    delay: function($q, $timeout) {
//            //        var delay = $q.defer();
//            //        $timeout(delay.resolve, 1000);
//            //        return delay.promise;
//            //    }
//            //}
//        }).
//        otherwise({
//            redirectTo: '/'
//        });
//}]);