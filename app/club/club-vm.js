var ClubVM = function ($http, $routeParams, baseUrl) {
    var self = this;
    this.club = {};

    $http.get(baseUrl + 'clubs/' + $routeParams.id).then(function (result) {
        self.club = result.data;
    }).catch(function (result) {
        console.log(result);
    });

    //$http.get('/rest/clubs/' + $routeParams.id).then(function (result) {
    //    self.club = result.data;
    //}).catch(function (result) {
    //    console.log(result);
    //});
};