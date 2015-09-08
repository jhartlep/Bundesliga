var app = angular.module('BundesligaApp', [
    'ngRoute',
    'ngAnimate',
    'ngSanitize',

    'angular-loading-bar',
    'ui.bootstrap',
    'ngMockE2E'
]);

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
            templateUrl: '/partials/matchDays/routing.list.html',
            controller: 'MatchDaysCtrl'
        })
        .when('/matchdays/:matchDay/:match', {
            templateUrl: '/partials/matchDays/routing.result.html',
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

app.filter('ifUndefinedOrNull', function () {
    return function (input, defaultValue) {
        if (angular.isUndefined(input) || input === null || input === '') {
            return defaultValue;
        }

        return input;
    }
});

app.controller('ClubsCtrl', function ($scope, $http) {
    $scope.vm = new ClubsVM($http);
});

app.controller('ClubCtrl', function ($scope, $http, $routeParams) {
    $scope.vm = new ClubVM($http, $routeParams);
});

app.controller('MatchDaysCtrl', function ($scope, $http, $route) {
    $scope.vm = new MatchDaysVM($http, $route);
});

app.controller('ResultCtrl', function ($scope, $http, $routeParams, $location) {
    $scope.vm = new ResultVM($http, $routeParams, $location);
});

app.controller('TableCtrl', function ($scope, $http) {
    $scope.vm = new TableVM($http);
});

app.controller('NavbarCtrl', function ($scope, $location, $http) {
    $scope.vm = new NavbarVM($location, $http)
});