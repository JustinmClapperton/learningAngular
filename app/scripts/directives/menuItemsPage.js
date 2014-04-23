var elementURL = "";
/*var customerA = {
 name: "Naomi",
 address: "1600 Amphitheatre"
 };


 angular.module('menuItems', [])
 .controller('Controller', ['$scope', function($scope) {
 $scope.customer = {
 name: 'Naomi',
 address: '1600 Amphitheatre'
 };
 }])*/
webPracticeApp.directive('myCustomer', function () {

    return {
        restrict: 'A',
        scope: {
            element: '='
        },
        templateUrl: elementURL,
        controller: function ($scope) {
//            console.log("hello");
            console.log($scope.element.type)

        }
    };

});



