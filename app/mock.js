app.run(function ($httpBackend) {

    var clubs = [
        new Club({id:  1, name: '1. FC Köln',               shortcut: 'KOE'}),
        new Club({id:  2, name: '1. FSV Mainz 05',          shortcut: 'M05'}),
        new Club({id:  3, name: 'Bayer 04 Leverkusen',      shortcut: 'B04'}),
        new Club({id:  4, name: 'Borussia Dortmund',        shortcut: 'BVB'}),
        new Club({id:  5, name: 'Borussia Mönchengladbach', shortcut: 'BMG'}),
        new Club({id:  6, name: 'Eintracht Frankfurt',      shortcut: 'SGE'}),
        new Club({id:  7, name: 'FC Augsburg',              shortcut: 'FCA'}),
        new Club({id:  8, name: 'FC Bayern München',        shortcut: 'FCB'}),
        new Club({id:  9, name: 'FC Ingolstadt 04',         shortcut: 'FCI'}),
        new Club({id: 10, name: 'FC Schalke 04',            shortcut: 'S04'}),
        new Club({id: 11, name: 'Hamburger SV',             shortcut: 'HSV'}),
        new Club({id: 12, name: 'Hannover 96',              shortcut: 'H96'}),
        new Club({id: 13, name: 'Hertha BSC',               shortcut: 'BSC'}),
        new Club({id: 14, name: 'SV Darmstadt 98',          shortcut: 'D98'}),
        new Club({id: 15, name: 'SV Werder Bremen',         shortcut: 'BRE'}),
        new Club({id: 16, name: 'TSG 1899 Hoffenheim',      shortcut: 'TSG'}),
        new Club({id: 17, name: 'VfB Stuttgart',            shortcut: 'VFB'}),
        new Club({id: 18, name: 'VfL Wolfsburg',            shortcut: 'WOB'})
    ];

    var matchDayOne = [
        new Match({id: 1, date: new Date(2015, 7, 14, 20, 30, 0, 0), home: clubs[7],  visitor: clubs[10]}),    // FCB:HSV
        new Match({id: 2, date: new Date(2015, 7, 15, 15, 30, 0, 0), home: clubs[14], visitor: clubs[9]}),     // BRE:S04
        new Match({id: 3, date: new Date(2015, 7, 15, 15, 30, 0, 0), home: clubs[6],  visitor: clubs[12]}),    // FCA:BSC
        new Match({id: 4, date: new Date(2015, 7, 15, 15, 30, 0, 0), home: clubs[2],  visitor: clubs[15]}),    // B04:TSG
        new Match({id: 5, date: new Date(2015, 7, 15, 15, 30, 0, 0), home: clubs[13], visitor: clubs[11]}),    // D98:H96
        new Match({id: 6, date: new Date(2015, 7, 15, 15, 30, 0, 0), home: clubs[1],  visitor: clubs[8]}),     // M05:FCI
        new Match({id: 7, date: new Date(2015, 7, 15, 18, 30, 0, 0), home: clubs[3],  visitor: clubs[4]}),     // BVB:BMG
        new Match({id: 8, date: new Date(2015, 7, 16, 15, 30, 0, 0), home: clubs[17], visitor: clubs[5]}),     // WOB:SGE
        new Match({id: 9, date: new Date(2015, 7, 16, 17, 30, 0, 0), home: clubs[16], visitor: clubs[0]})      // VFB:KOE
    ];

    var matchDayTwo = [
        new Match({id: 1, date: new Date(2015, 7, 21, 20, 30, 0, 0), home: clubs[12], visitor: clubs[14]}),    // BSC:BRE
        new Match({id: 2, date: new Date(2015, 7, 22, 15, 30, 0, 0), home: clubs[9],  visitor: clubs[13]}),    // S04:D98
        new Match({id: 3, date: new Date(2015, 7, 22, 15, 30, 0, 0), home: clubs[11], visitor: clubs[2]}),     // H96:B04
        new Match({id: 4, date: new Date(2015, 7, 22, 15, 30, 0, 0), home: clubs[15], visitor: clubs[7]}),     // TSG:FCB
        new Match({id: 5, date: new Date(2015, 7, 22, 15, 30, 0, 0), home: clubs[0],  visitor: clubs[17]}),    // KOE:WOB
        new Match({id: 6, date: new Date(2015, 7, 22, 15, 30, 0, 0), home: clubs[5],  visitor: clubs[6]}),     // SGE:FCA
        new Match({id: 7, date: new Date(2015, 7, 22, 18, 30, 0, 0), home: clubs[10], visitor: clubs[16]}),    // HSV:VFB
        new Match({id: 8, date: new Date(2015, 7, 23, 15, 30, 0, 0), home: clubs[8],  visitor: clubs[3]}),     // FCI:BVB
        new Match({id: 9, date: new Date(2015, 7, 23, 17, 30, 0, 0), home: clubs[4],  visitor: clubs[1]})      // BMG:M05
    ];

    var matchDayThree = [
        new Match({id: 1, date: new Date(2015, 7, 28, 20, 30, 0, 0), home: clubs[17], visitor: clubs[9]}),     // WOB:S04
        new Match({id: 2, date: new Date(2015, 7, 29, 15, 30, 0, 0), home: clubs[13], visitor: clubs[15]}),    // D98:TSG
        new Match({id: 3, date: new Date(2015, 7, 29, 15, 30, 0, 0), home: clubs[1],  visitor: clubs[11]}),    // M05:H96
        new Match({id: 4, date: new Date(2015, 7, 29, 15, 30, 0, 0), home: clubs[6],  visitor: clubs[8]}),     // FCA:FCI
        new Match({id: 5, date: new Date(2015, 7, 29, 15, 30, 0, 0), home: clubs[16], visitor: clubs[5]}),     // VFB:SGE
        new Match({id: 6, date: new Date(2015, 7, 29, 15, 30, 0, 0), home: clubs[0],  visitor: clubs[10]}),    // KOE:HSV
        new Match({id: 7, date: new Date(2015, 7, 29, 18, 30, 0, 0), home: clubs[7],  visitor: clubs[2]}),     // FCB:B04
        new Match({id: 8, date: new Date(2015, 7, 30, 15, 30, 0, 0), home: clubs[3],  visitor: clubs[12]}),    // BVB:BSC
        new Match({id: 9, date: new Date(2015, 7, 30, 17, 30, 0, 0), home: clubs[14], visitor: clubs[4]})      // BRE:BMG
    ];

    var matchDayFour = [
        new Match({id: 1, date: new Date(2015, 8, 11, 20, 30, 0, 0), home: clubs[4],  visitor: clubs[10]}),    // BMG:HSV
        new Match({id: 2, date: new Date(2015, 8, 12, 15, 30, 0, 0), home: clubs[7],  visitor: clubs[6]}),     // FCB:FCA
        new Match({id: 3, date: new Date(2015, 8, 12, 15, 30, 0, 0), home: clubs[2],  visitor: clubs[13]}),    // B04:D98
        new Match({id: 4, date: new Date(2015, 8, 12, 15, 30, 0, 0), home: clubs[12], visitor: clubs[16]}),    // BSC:VFB
        new Match({id: 5, date: new Date(2015, 8, 12, 15, 30, 0, 0), home: clubs[11], visitor: clubs[3]}),     // H96:BVB
        new Match({id: 6, date: new Date(2015, 8, 12, 15, 30, 0, 0), home: clubs[8],  visitor: clubs[17]}),    // FCI:WOB
        new Match({id: 7, date: new Date(2015, 8, 12, 18, 30, 0, 0), home: clubs[5],  visitor: clubs[0]}),     // SGE:KOE
        new Match({id: 8, date: new Date(2015, 8, 13, 15, 30, 0, 0), home: clubs[15], visitor: clubs[14]}),    // TSG:BRE
        new Match({id: 9, date: new Date(2015, 8, 13, 17, 30, 0, 0), home: clubs[9],  visitor: clubs[1]})      // S04:M05
    ];

    var results = [
        [
            { match: matchDayOne[0], result: {home: 5, visitor: 0} },
            { match: matchDayOne[1], result: {home: 0, visitor: 3} },
            { match: matchDayOne[2], result: {home: 0, visitor: 1} },
            { match: matchDayOne[3], result: {home: 2, visitor: 1} },
            { match: matchDayOne[4], result: {home: 2, visitor: 2} },
            { match: matchDayOne[5], result: {home: 0, visitor: 1} },
            { match: matchDayOne[6], result: {home: 4, visitor: 0} },
            { match: matchDayOne[7], result: {home: 2, visitor: 1} },
            { match: matchDayOne[8], result: {home: 1, visitor: 3} }
        ],
        [
            { match: matchDayTwo[0], result: {home: 1, visitor: 1} },
            { match: matchDayTwo[1], result: {home: 1, visitor: 1} },
            { match: matchDayTwo[2], result: {home: 0, visitor: 1} },
            { match: matchDayTwo[3], result: {home: 1, visitor: 2} },
            { match: matchDayTwo[4], result: {home: 1, visitor: 1} },
            { match: matchDayTwo[5], result: {home: 1, visitor: 1} },
            { match: matchDayTwo[6], result: {home: 3, visitor: 2} },
            { match: matchDayTwo[7], result: {home: 0, visitor: 4} },
            { match: matchDayTwo[8], result: {home: 1, visitor: 2} }
        ],
        [
            { match: matchDayThree[0], result: {home: 3, visitor: 0} },
            { match: matchDayThree[1], result: {home: 0, visitor: 0} },
            { match: matchDayThree[2], result: {home: 3, visitor: 0} },
            { match: matchDayThree[3], result: {home: 0, visitor: 1} },
            { match: matchDayThree[4], result: {home: 1, visitor: 4} },
            { match: matchDayThree[5], result: {home: 2, visitor: 1} },
            { match: matchDayThree[6], result: {home: 3, visitor: 0} },
            { match: matchDayThree[7], result: {home: 3, visitor: 1} },
            { match: matchDayThree[8], result: {home: 2, visitor: 1} }
        ]
    ];

    var matchDays = [
        {id: 1, matchDay: matchDayOne},
        {id: 2, matchDay: matchDayTwo},
        {id: 3, matchDay: matchDayThree},
        {id: 4, matchDay: matchDayFour}
    ];

    var regExIncludes = new RegExp('includes/(.+)');
    var regExPartials = new RegExp('partials/(.+)');
    var regExTypeahead = new RegExp('template/typeahead/(.+)');
    var regExRest = new RegExp('http://localhost:8080/bundesliga/(.+)');

    var regExClub = new RegExp('rest/clubs/([0-9]+)');
    var regExMatch = new RegExp('rest/matchdays/([0-9]+)/([0-9]+)');
    var regExMatchDay = new RegExp('rest/matchday/([0-9]+)');
    var regExBulkOne = new RegExp('rest/bulk/([0-9]+)');

    // GET: /rest/clubs
    $httpBackend.whenGET('/rest/clubs').respond(clubs);
    // GET: /rest/matchdays
    $httpBackend.whenGET('/rest/matchdays').respond(matchDays);

    // GET: /rest/clubs/:id
    $httpBackend.whenGET({
        test: function (url) {
            return regExClub.test(url);
        }
    }).respond(function (method, url) {
        var id = parseInt(url.match(regExClub)[1]);
        var index = _.findIndex(clubs, {id: id});

        return index === -1 ? [404, 'Not found'] : [200, clubs[index]];
    });

    // GET: /rest/matchday/:id
    $httpBackend.whenGET({
        test: function (url) {
            return regExMatchDay.test(url);
        }
    }).respond(function (method, url) {
        var id = parseInt(url.match(regExMatchDay)[1]);
        var index = _.findIndex(matchDays, {id: id});

        return index === -1 ? [404, 'Not found'] : [200, matchDays[index]];
    });

    $httpBackend.whenGET({
        test: function (url) {
            return regExBulkOne.test(url);
        }
    }).respond(function (method, url) {
        var id = parseInt(url.match(regExBulkOne)[1]);

        return [200, results[id - 1]];
    });

    // GET: /rest/matchdays/:matchDay/:match
    $httpBackend.whenGET({
        test: function (url) {
            return regExMatch.test(url);
        }
    }).respond(function (method, url) {
        var urlMatch = url.match(regExMatch);
        var matchDay = parseInt(urlMatch[1]);
        var match = parseInt(urlMatch[2]);
        var indexMatchDay = _.findIndex(matchDays, {id: matchDay});
        var indexMatch = _.findIndex(matchDays[indexMatchDay].matchDay, {id: match});

        return (indexMatchDay === -1 || indexMatch === -1) ? [404, 'Not found'] : [200, matchDays[indexMatchDay].matchDay[indexMatch]];
    });

    // PUT: /rest/matchdays/:matchDay/:match {result}
    $httpBackend.whenPUT({
        test: function (url) {
            return regExMatch.test(url);
        }
    }).respond(function (method, url, result) {
        var urlMatch = url.match(regExMatch);
        var matchDay = parseInt(urlMatch[1]);
        var match = parseInt(urlMatch[2]);
        var indexMatchDays = _.findIndex(matchDays, {id: matchDay});
        var indexMatch = _.findIndex(matchDays[indexMatchDays].matchDay, {id: match});

        var home = matchDays[indexMatchDays].matchDay[indexMatch].home;
        var visitor = matchDays[indexMatchDays].matchDay[indexMatch].visitor;
        var encounter = matchDays[indexMatchDays].matchDay[indexMatch];

        result = JSON.parse(result);

        if (encounter.hasResult) {
            return [403, 'Not possible yet'];
        }

        if ((result.home !== undefined && result.home !== null) && (result.visitor !== undefined && result.visitor !== null)) {
            encounter.goalsHome = result.home;
            encounter.goalsVisitor = result.visitor;
            encounter.hasResult = true;

            home.goalsShot += result.home;
            home.goalsTaken += result.visitor;
            home.goalsDiff = home.goalsShot - home.goalsTaken;

            visitor.goalsShot += result.visitor;
            visitor.goalsTaken += result.home;
            visitor.goalsDiff = visitor.goalsShot - visitor.goalsTaken;

            home.matches += 1;
            visitor.matches += 1;

            if (result.home > result.visitor) { // Sieger Heim
                home.victories += 1;
                visitor.defeats += 1;
                home.points += 3;
            } else if (result.home < result.visitor) { // Sieger Gast
                visitor.victories += 1;
                home.defeats += 1;
                visitor.points += 3;
            } else {
                home.draws += 1;
                visitor.draws += 1;
                home.points += 1;
                visitor.points += 1;
            }
        } else {
            return [400, 'Missing Result Object'];
        }

        return [200, encounter];
    });

    // GET: /rest/bulk
    $httpBackend.whenGET('/rest/bulk').respond(results);

    $httpBackend.whenGET({
        test: function (url) {
            return (regExIncludes.test(url) || regExPartials.test(url) || regExTypeahead.test(url) || regExRest.test(url));
        }
    }).passThrough();

    $httpBackend.whenPUT({
        test: function (url) {
            return (regExRest.test(url));
        }
    }).passThrough();

    $httpBackend.whenPOST({
        test: function (url) {
            return (regExRest.test(url));
        }
    }).passThrough();
});