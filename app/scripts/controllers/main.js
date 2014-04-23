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

                $scope.advancedMenu = "AdvancedMenu",


                $scope.size = 2,
                $scope.goToView1 = function (id, info) {
                    elementURL = "views/partials/slide-bar.html";
                    elementMenu = id;


                    $location.path("/views/partials/" + info);
                }

            var input = menuElements;
            var menuName = 'AdvancedMenu';
            var elementType = 'LinkButton';
            var keyName;
            var results = [];
            var groupedResult = {};
            var length = 0;
            var l = 0;
            var dataLength = Object.keys(input).length
            for (var i = 0; i < dataLength; i++) {
                keyName = input[Object.keys(input)[i]]
                // console.log(keyName);
                if (keyName.menu === menuName && keyName.type === elementType) {

                    results.push(input[Object.keys(input)[i]]);

                }
            }
            length = results.length / 2;
            for (var k = 0; k < length; k++) {
                groupedResult[k] = [];
                groupedResult[k]["button" + l] = results[l];
                l++;
                if (results[l]) {
                    groupedResult[k]["button" + l] = results[l];
                    l++;
                } else {
                    groupedResult[k]["button" + l] = {};
                }
            }

            $scope.menuButtons = groupedResult;

            return results;


        })
    ;

