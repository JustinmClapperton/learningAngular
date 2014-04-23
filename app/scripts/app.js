'use strict';

angular
    .module('webPracticeApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'/*,
        'menuItems'*/
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/views/partials/:viewId', {
                templateUrl: '/views/partials/selected-menu.html',
                controller: 'viewController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
