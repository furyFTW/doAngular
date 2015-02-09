'use strict';

angular.module('app.item', ['ngRoute'])

    //.config(['$routeProvider', function($routeProvider) {
    //    $routeProvider.when('/view1', {
    //        templateUrl: 'view1/view1.html',
    //        controller: 'View1Ctrl'
    //    });
    //}])

    .controller('appItem', [function ($scope) {
        $scope.data = 1;
    }]);