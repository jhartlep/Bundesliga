var ResultVM = function ($http, $routeParams, $location, baseUrl) {
    var self = this;

    $http.get(baseUrl + 'matches/' + $routeParams.matchDay + '/' + $routeParams.match).then(function (result) {
        self.match = result.data;

        if (!self.match.hasResult) {
            self.match.goalsHome = undefined;
            self.match.goalsVisitor = undefined;
        }

    }).catch(function (result) {
        console.log(result);
    });

    this.saveResult = function () {
        $http.put(baseUrl + 'matches/' + $routeParams.matchDay + '/' + $routeParams.match, self.match).then(function () {
            $location.path('/matchdays');
        }).catch(function (result) {
            console.log(result);
        });

    }
};