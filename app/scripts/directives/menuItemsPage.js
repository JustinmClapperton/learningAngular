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
            element: '=',
            elementArray: '='
        },
        templateUrl: elementURL,
        controller: function ($scope) {
            var test = JSON.stringify($scope.elementArray);
            $scope.selectedOption = "Success"
            $scope.changeOption = function(selectedItem){
                $scope.selectedOption = selectedItem;
               // alert(1);
            }

        }
    };

});



