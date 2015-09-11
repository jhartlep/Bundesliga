var MatchDaysVM = function ($http, $route, baseUrl) {
    var self = this;

    var results = [
        { matchDay: 1, results: [
            { match: 1, result: {home: 5, visitor: 0} },
            { match: 2, result: {home: 0, visitor: 3} },
            { match: 3, result: {home: 0, visitor: 1} },
            { match: 4, result: {home: 2, visitor: 1} },
            { match: 5, result: {home: 2, visitor: 2} },
            { match: 6, result: {home: 0, visitor: 1} },
            { match: 7, result: {home: 4, visitor: 0} },
            { match: 8, result: {home: 2, visitor: 1} },
            { match: 9, result: {home: 1, visitor: 3} }
        ]},
        { matchDay: 2, results: [
            { match: 10, result: {home: 1, visitor: 1} },
            { match: 11, result: {home: 1, visitor: 1} },
            { match: 12, result: {home: 0, visitor: 1} },
            { match: 13, result: {home: 1, visitor: 2} },
            { match: 14, result: {home: 1, visitor: 1} },
            { match: 15, result: {home: 1, visitor: 1} },
            { match: 16, result: {home: 3, visitor: 2} },
            { match: 17, result: {home: 0, visitor: 4} },
            { match: 18, result: {home: 1, visitor: 2} }
        ]},
        { matchDay: 3, results: [
            { match: 19, result: {home: 3, visitor: 0} },
            { match: 20, result: {home: 0, visitor: 0} },
            { match: 21, result: {home: 3, visitor: 0} },
            { match: 22, result: {home: 0, visitor: 1} },
            { match: 23, result: {home: 1, visitor: 4} },
            { match: 24, result: {home: 2, visitor: 1} },
            { match: 25, result: {home: 3, visitor: 0} },
            { match: 26, result: {home: 3, visitor: 1} },
            { match: 27, result: {home: 2, visitor: 1} }
        ]}
    ];

    this.matches = [];
    this.matchDay = [];
    this.matchDays = [];
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

    this.setBulkForMatchDay = function (matchDay) {
        var matchResults = {};
        var matchDayId, matchId;
        angular.forEach(matchDay, function (match) {
            var index = _.findIndex(results, {matchDay: match.matchDay});
            matchDayId = match.matchDay;
            matchResults = results[index];
            return false;
        });

        angular.forEach(matchResults.results, function (matchResult) {
            var index = _.findIndex(self.matchDay, {id: matchResult.match});
            var match = self.matchDay[index];
            matchId = matchResult.match;

            match.goalsHome = matchResult.result.home;
            match.goalsVisitor = matchResult.result.visitor;

            $http.put(baseUrl + 'matches/' + matchDayId + '/' + matchId, match).catch(function (result) {
                console.log(result);
            });
        });

        $route.reload();
    };

    this.setBulkForAll = function () {
        $http.get(baseUrl + "matches").then(function (result) {
            self.matchDays = result.data;

            angular.forEach(results, function (matchResults) {
                var matchDayId = matchResults.matchDay;
                angular.forEach(matchResults.results, function (matchResult) {
                    var index = _.findIndex(self.matchDays, {id: matchResult.match});
                    var match = self.matchDays[index];
                    var matchId = matchResult.match;

                    match.goalsHome = matchResult.result.home;
                    match.goalsVisitor = matchResult.result.visitor;

                    $http.put(baseUrl + 'matches/' + matchDayId + '/' + matchId, match).catch(function (result) {
                        console.log(result);
                    });
                });
            });

        }).catch(function (result) {
            console.log(result);
        });
    };

};