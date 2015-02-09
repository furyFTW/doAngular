angular.module('app.directives', [])
    .directive('list', [function () {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            // scope: {}, // {} = isolate, true = child, false/undefined = no change
            controller: ['$scope', '$http', function ($scope, $http) {
                $http.get('/sushi/app/data/information.json').success(function (data) {
                    $scope.menu = data;
                });
            }],
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            templateUrl: './components/list.html',
            replace: true
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        };
    }]);