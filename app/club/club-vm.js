var ClubVM = function ($http, $routeParams) {
    var self = this;

    $http.get('/rest/clubs/' + $routeParams.id).then(function (result) {
        self.club = result.data;
    }).catch(function (result) {
        console.log(result);
    });
};