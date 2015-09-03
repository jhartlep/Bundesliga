var ErgebnisVM = function ($http, $routeParams, $location) {
    var self = this;

    $http.get('/rest/spieltage/' + $routeParams.spieltag + '/' + $routeParams.spiel).then(function (result) {
        self.spiel = result.data;
    }).catch(function (result) {
        console.log(result);
    });

    this.saveErgebnis = function () {
        var ergebnis = {
            heim: self.spiel.toreHeim,
            gast: self.spiel.toreGast
        };

        $http.put('/rest/spieltage/' + $routeParams.spieltag + '/' + $routeParams.spiel, ergebnis).then(function (result) {
            $location.path('/spieltage');
        }).catch(function (result) {
            console.log(result)
        });
    }
};