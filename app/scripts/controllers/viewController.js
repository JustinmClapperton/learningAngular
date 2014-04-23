

webPracticeApp.controller('viewController', function($scope, $location, $routeParams){
    $scope.viewId = $routeParams.viewId,
    $scope.elementName =$routeParams.viewId,
    $scope.elementArray = menuElements,
    $scope.elementPage = $routeParams.viewId,
    $scope.elementMenu = elementMenu,
    //$scope.menuPage = element
    $scope.setElementUrl = function(){

    },
    $scope.backToView = function(){
        console.log("im here");

        $location.path("/views/main.html");
    }

})