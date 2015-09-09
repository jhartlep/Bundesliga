var MatchDaysVM = function ($http, $route, baseUrl) {
    var self = this;

    this.matches = [];
    this.matchDay = [];
    this.hasMatches = false;

    this.selectMatchDay = function (id) {
        $http.get(baseUrl + 'matches/' + id).then(function (result) {
            self.matchDay = result.data;
            self.hasMatches = true;
        }).catch(function (result) {
            console.log(result);
        });
    };

    this.clearMatchDay = function () {
        self.matchDay = [];
        self.hasMatches = false;
    };

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