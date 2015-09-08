var MatchDaysVM = function ($http, $route) {
    var self = this;

    this.splitAction = "Spieltag ausw\u00e4hlen";
    this.matchdays = [];
    this.matchDay = {};

    this.selectMatchDay = function (id) {
        self.splitAction = id + ". Spieltag";

        $http.get('/rest/matchday/' + id).then(function (result) {
            self.matchDay = result.data;
        }).catch(function (result) {
            console.log(result);
        });
    };

    $http.get('/rest/matchdays').then(function (result) {
        self.matchdays = result.data;
    }).catch(function (result) {
        console.log(result);
    });

    this.setBulkForMatchDay = function () {
        if (angular.equals({}, self.matchDay)) {
            $http.get('/rest/bulk').then(function (result) {
                angular.forEach(result.data, function (bulkMatchday, index) {
                    setResult(index, bulkMatchday);
                });

                $route.reload();
            }).catch(function (result) {
                console.log(result);
            });
        } else {
            $http.get('/rest/bulk/' + self.matchDay.id).then(function (result) {
                setResult(self.matchDay.id - 1, result.data);

                $route.reload();
            }).catch(function (result) {
                console.log(result);
            });

        }
    };

    function setResult(index, bulkMatchday) {
        angular.forEach(bulkMatchday, function (matchday) {
            var id = index + 1;
            $http.put('/rest/matchdays/' + id + '/' + matchday.match.id, matchday.result).catch(function (result) {
                console.log(result);
            })
        });
    }

};