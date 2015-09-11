var app = angular.module('BundesligaApp', [
    'ngRoute',
    'ngAnimate',
    'ngSanitize',
    'ngResource',

    'angular-loading-bar',
    'ui.bootstrap',
    'ngMockE2E'
]);

app.constant('baseUrl', 'http://localhost:8080/bundesliga/');

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/partials/clubs/routing.list.html',
            controller: 'ClubsCtrl'
        })
        .when('/club/:id', {
            templateUrl: '/partials/clubs/routing.details.html',
            controller: 'ClubCtrl'
        })
        .when('/matchdays', {
            templateUrl: '/partials/match-days/routing.list.html',
            controller: 'MatchDaysCtrl'
        })
        .when('/matchdays/:matchDay/:match', {
            templateUrl: '/partials/match-days/routing.result.html',
            controller: 'ResultCtrl'
        })
        .when('/table', {
            templateUrl: '/partials/table/routing.table.html',
            controller: 'TableCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
});

app.filter('notPlayedYet', function () {
    return function (input, defaultValue) {
        if (angular.isUndefined(input) || input === null || input === '') {
            return defaultValue;
        }

        return input;
    }
});

app.filter('matchDayRange', function () {
    return function (input, start, total) {
        start = parseInt(start);
        total = parseInt(total);
        for (var i = start; i < total; i++) {
            input.push(i);
        }
        return input;
    }
});

app.controller('ClubsCtrl', function ($scope, $http, baseUrl) {
    $scope.vm = new ClubsVM($http, baseUrl);
});

app.controller('ClubCtrl', function ($scope, $http, $routeParams, baseUrl) {
    $scope.vm = new ClubVM($http, $routeParams, baseUrl);
});

app.controller('MatchDaysCtrl', function ($scope, $http, $route, baseUrl) {
    $scope.vm = new MatchDaysVM($http, $route, baseUrl);
});

app.controller('ResultCtrl', function ($scope, $http, $routeParams, $location, baseUrl) {
    $scope.vm = new ResultVM($http, $routeParams, $location, baseUrl);
});

app.controller('TableCtrl', function ($scope, $http, baseUrl) {
    $scope.vm = new TableVM($http, baseUrl);
});

app.controller('NavbarCtrl', function ($scope, $location, $http) {
    $scope.vm = new NavbarVM($location, $http)
});