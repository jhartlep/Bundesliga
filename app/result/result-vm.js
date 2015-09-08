var ResultVM = function ($http, $routeParams, $location) {
    var self = this;

    $http.get('/rest/matchdays/' + $routeParams.matchDay + '/' + $routeParams.match).then(function (result) {
        self.match = result.data;
    }).catch(function (result) {
        console.log(result);
    });

    this.saveResult = function () {
        var result = {
            home: self.match.goalsHome,
            visitor: self.match.goalsVisitor
        };

        $http.put('/rest/matchdays/' + $routeParams.matchDay + '/' + $routeParams.match, result).then(function () {
            $location.path('/matchdays');
        }).catch(function (result) {
            console.log(result)
        });
    }
};