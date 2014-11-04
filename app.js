angular.module("myApp", [])
    .controller("appCtrl", function($http, $scope, dataService) {
        $scope.data = {
            hello: "Hello world from my app",
            test: true,
            states: dataService.states
        };
        $scope.doStuff = function() {
            $scope.data.test = !$scope.data.test;
        };
        var doMoreStuff = function() {

        };
    })
    .directive("myDirective", function() {
        return {
            restrict: "E",
            template: "<div>My Directive Yay!!! :) :)<div ng-transclude></div></div>",
            controller: function($scope) {
            },
            scope: {
                data: '='
            },
            transclude: true
            // templateUrl: "mydirective.html"
        };
    })
    .factory("dataService", function($http){
       return {
            states: ["Illinois", "Texas", "Ohio", "Florida"]
       } 
    });