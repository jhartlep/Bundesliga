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
            templateUrl: '/partials/vereine/routing.liste.html',
            controller: 'VereineCtrl'
        })
        .when('/verein/:id', {
            templateUrl: '/partials/vereine/routing.details.html',
            controller: 'VereinCtrl'
        })
        .when('/spieltage', {
            templateUrl: '/partials/spieltage/routing.liste.html',
            controller: 'SpieltageCtrl'
        })
        .when('/spieltage/:spieltag/:spiel', {
            templateUrl: '/partials/spieltage/routing.ergebnis.html',
            controller: 'ErgebnisCtrl'
        })
        .when('/tabelle', {
            templateUrl: '/partials/tabelle/routing.tabelle.html',
            controller: 'TabelleCtrl'
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

app.controller('VereineCtrl', function ($scope, $http) {
    $scope.vm = new VereineVM($http);
});

app.controller('VereinCtrl', function ($scope, $http, $routeParams) {
    $scope.vm = new VereinVM($http, $routeParams);
});

app.controller('SpieltageCtrl', function ($scope, $http, $route) {
    $scope.vm = new SpieltageVM($http, $route);
});

app.controller('ErgebnisCtrl', function ($scope, $http, $routeParams, $location) {
    $scope.vm = new ErgebnisVM($http, $routeParams, $location);
});

app.controller('TabelleCtrl', function ($scope, $http) {
    $scope.vm = new TabelleVM($http);
});

app.controller('NavbarCtrl', function ($scope, $location, $http) {
    $scope.vm = new NavbarVM($location, $http)
});