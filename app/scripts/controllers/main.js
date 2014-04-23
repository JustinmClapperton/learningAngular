'use strict';

var webPracticeApp = angular.module('webPracticeApp')
    .controller('MainCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.testVar = controllerVar,
            $scope.menuArray = menuArray,
            $scope.menuButtons = menuElements,
            $scope.advancedMenu = "AdvancedMenu",


            $scope.size = 2,
            $scope.goToView = function () {
                elementURL = "views/partials/slide-bar.html";

                $location.path("/views/partials/" + menuArray[1]);
            },
            $scope.goToView1 = function () {
                elementURL = "views/partials/slide-bar.html";


                $location.path("/views/partials/" + menuArray[0]);
            }

    });
