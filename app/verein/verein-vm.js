var VereinVM = function ($http, $routeParams) {
    var self = this;

    $http.get('/rest/vereine/' + $routeParams.id).then(function (result) {
        self.verein = result.data;
    }).catch(function (result) {
        console.log(result);
    });
};