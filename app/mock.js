app.run(function ($httpBackend) {

    var vereine = [
        new Verein({id:  1, name: '1. FC Köln',               short: 'KOE'}),
        new Verein({id:  2, name: '1. FSV Mainz 05',          short: 'M05'}),
        new Verein({id:  3, name: 'Bayer 04 Leverkusen',      short: 'B04'}),
        new Verein({id:  4, name: 'Borussia Dortmund',        short: 'BVB'}),
        new Verein({id:  5, name: 'Borussia Mönchengladbach', short: 'BMG'}),
        new Verein({id:  6, name: 'Eintracht Frankfurt',      short: 'SGE'}),
        new Verein({id:  7, name: 'FC Augsburg',              short: 'FCA'}),
        new Verein({id:  8, name: 'FC Bayern München',        short: 'FCB'}),
        new Verein({id:  9, name: 'FC Ingolstadt 04',         short: 'FCI'}),
        new Verein({id: 10, name: 'FC Schalke 04',            short: 'S04'}),
        new Verein({id: 11, name: 'Hamburger SV',             short: 'HSV'}),
        new Verein({id: 12, name: 'Hannover 96',              short: 'H96'}),
        new Verein({id: 13, name: 'Hertha BSC',               short: 'BSC'}),
        new Verein({id: 14, name: 'SV Darmstadt 98',          short: 'D98'}),
        new Verein({id: 15, name: 'SV Werder Bremen',         short: 'BRE'}),
        new Verein({id: 16, name: 'TSG 1899 Hoffenheim',      short: 'TSG'}),
        new Verein({id: 17, name: 'VfB Stuttgart',            short: 'VFB'}),
        new Verein({id: 18, name: 'VfL Wolfsburg',            short: 'WOB'})
    ];

    var spieltagEins = [
        new Spiel({id: 1, date: new Date(2015, 7, 14, 20, 30, 0, 0), heim: vereine[7],  gast: vereine[10]}),    // FCB:HSV
        new Spiel({id: 2, date: new Date(2015, 7, 15, 15, 30, 0, 0), heim: vereine[14], gast: vereine[9]}),     // BRE:S04
        new Spiel({id: 3, date: new Date(2015, 7, 15, 15, 30, 0, 0), heim: vereine[6],  gast: vereine[12]}),    // FCA:BSC
        new Spiel({id: 4, date: new Date(2015, 7, 15, 15, 30, 0, 0), heim: vereine[2],  gast: vereine[15]}),    // B04:TSG
        new Spiel({id: 5, date: new Date(2015, 7, 15, 15, 30, 0, 0), heim: vereine[13], gast: vereine[11]}),    // D98:H96
        new Spiel({id: 6, date: new Date(2015, 7, 15, 15, 30, 0, 0), heim: vereine[1],  gast: vereine[8]}),     // M05:FCI
        new Spiel({id: 7, date: new Date(2015, 7, 15, 18, 30, 0, 0), heim: vereine[3],  gast: vereine[4]}),     // BVB:BMG
        new Spiel({id: 8, date: new Date(2015, 7, 16, 15, 30, 0, 0), heim: vereine[17], gast: vereine[5]}),     // WOB:SGE
        new Spiel({id: 9, date: new Date(2015, 7, 16, 17, 30, 0, 0), heim: vereine[16], gast: vereine[0]})      // VFB:KOE
    ];

    var spieltagZwei = [
        new Spiel({id: 1, date: new Date(2015, 7, 21, 20, 30, 0, 0), heim: vereine[12], gast: vereine[14]}),    // BSC:BRE
        new Spiel({id: 2, date: new Date(2015, 7, 22, 15, 30, 0, 0), heim: vereine[9],  gast: vereine[13]}),    // S04:D98
        new Spiel({id: 3, date: new Date(2015, 7, 22, 15, 30, 0, 0), heim: vereine[11], gast: vereine[2]}),     // H96:B04
        new Spiel({id: 4, date: new Date(2015, 7, 22, 15, 30, 0, 0), heim: vereine[15], gast: vereine[7]}),     // TSG:FCB
        new Spiel({id: 5, date: new Date(2015, 7, 22, 15, 30, 0, 0), heim: vereine[0],  gast: vereine[17]}),    // KOE:WOB
        new Spiel({id: 6, date: new Date(2015, 7, 22, 15, 30, 0, 0), heim: vereine[5],  gast: vereine[6]}),     // SGE:FCA
        new Spiel({id: 7, date: new Date(2015, 7, 22, 18, 30, 0, 0), heim: vereine[10], gast: vereine[16]}),    // HSV:VFB
        new Spiel({id: 8, date: new Date(2015, 7, 23, 15, 30, 0, 0), heim: vereine[8],  gast: vereine[3]}),     // FCI:BVB
        new Spiel({id: 9, date: new Date(2015, 7, 23, 17, 30, 0, 0), heim: vereine[4],  gast: vereine[1]})      // BMG:M05
    ];

    var spieltagDrei = [
        new Spiel({id: 1, date: new Date(2015, 7, 28, 20, 30, 0, 0), heim: vereine[17], gast: vereine[9]}),     // WOB:S04
        new Spiel({id: 2, date: new Date(2015, 7, 29, 15, 30, 0, 0), heim: vereine[13], gast: vereine[15]}),    // D98:TSG
        new Spiel({id: 3, date: new Date(2015, 7, 29, 15, 30, 0, 0), heim: vereine[1],  gast: vereine[11]}),    // M05:H96
        new Spiel({id: 4, date: new Date(2015, 7, 29, 15, 30, 0, 0), heim: vereine[6],  gast: vereine[8]}),     // FCA:FCI
        new Spiel({id: 5, date: new Date(2015, 7, 29, 15, 30, 0, 0), heim: vereine[16], gast: vereine[5]}),     // VFB:SGE
        new Spiel({id: 6, date: new Date(2015, 7, 29, 15, 30, 0, 0), heim: vereine[0],  gast: vereine[10]}),    // KOE:HSV
        new Spiel({id: 7, date: new Date(2015, 7, 29, 18, 30, 0, 0), heim: vereine[7],  gast: vereine[2]}),     // FCB:B04
        new Spiel({id: 8, date: new Date(2015, 7, 30, 15, 30, 0, 0), heim: vereine[3],  gast: vereine[12]}),    // BVB:BSC
        new Spiel({id: 9, date: new Date(2015, 7, 30, 17, 30, 0, 0), heim: vereine[14], gast: vereine[4]})      // BRE:BMG
    ];

    var spieltagVier = [
        new Spiel({id: 1, date: new Date(2015, 8, 11, 20, 30, 0, 0), heim: vereine[4],  gast: vereine[10]}),    // BMG:HSV
        new Spiel({id: 2, date: new Date(2015, 8, 12, 15, 30, 0, 0), heim: vereine[7],  gast: vereine[6]}),     // FCB:FCA
        new Spiel({id: 3, date: new Date(2015, 8, 12, 15, 30, 0, 0), heim: vereine[2],  gast: vereine[13]}),    // B04:D98
        new Spiel({id: 4, date: new Date(2015, 8, 12, 15, 30, 0, 0), heim: vereine[12], gast: vereine[16]}),    // BSC:VFB
        new Spiel({id: 5, date: new Date(2015, 8, 12, 15, 30, 0, 0), heim: vereine[11], gast: vereine[3]}),     // H96:BVB
        new Spiel({id: 6, date: new Date(2015, 8, 12, 15, 30, 0, 0), heim: vereine[8],  gast: vereine[17]}),    // FCI:WOB
        new Spiel({id: 7, date: new Date(2015, 8, 12, 18, 30, 0, 0), heim: vereine[5],  gast: vereine[0]}),     // SGE:KOE
        new Spiel({id: 8, date: new Date(2015, 8, 13, 15, 30, 0, 0), heim: vereine[15], gast: vereine[14]}),    // TSG:BRE
        new Spiel({id: 9, date: new Date(2015, 8, 13, 17, 30, 0, 0), heim: vereine[9],  gast: vereine[1]})      // S04:M05
    ];

    var ergebnisse = [
        [
            { spiel: spieltagEins[0], ergebnis: {heim: 5, gast: 0} },
            { spiel: spieltagEins[1], ergebnis: {heim: 0, gast: 3} },
            { spiel: spieltagEins[2], ergebnis: {heim: 0, gast: 1} },
            { spiel: spieltagEins[3], ergebnis: {heim: 2, gast: 1} },
            { spiel: spieltagEins[4], ergebnis: {heim: 2, gast: 2} },
            { spiel: spieltagEins[5], ergebnis: {heim: 0, gast: 1} },
            { spiel: spieltagEins[6], ergebnis: {heim: 4, gast: 0} },
            { spiel: spieltagEins[7], ergebnis: {heim: 2, gast: 1} },
            { spiel: spieltagEins[8], ergebnis: {heim: 1, gast: 3} }
        ],
        [
            { spiel: spieltagZwei[0], ergebnis: {heim: 1, gast: 1} },
            { spiel: spieltagZwei[1], ergebnis: {heim: 1, gast: 1} },
            { spiel: spieltagZwei[2], ergebnis: {heim: 0, gast: 1} },
            { spiel: spieltagZwei[3], ergebnis: {heim: 1, gast: 2} },
            { spiel: spieltagZwei[4], ergebnis: {heim: 1, gast: 1} },
            { spiel: spieltagZwei[5], ergebnis: {heim: 1, gast: 1} },
            { spiel: spieltagZwei[6], ergebnis: {heim: 3, gast: 2} },
            { spiel: spieltagZwei[7], ergebnis: {heim: 0, gast: 4} },
            { spiel: spieltagZwei[8], ergebnis: {heim: 1, gast: 2} }
        ],
        [
            { spiel: spieltagDrei[0], ergebnis: {heim: 3, gast: 0} },
            { spiel: spieltagDrei[1], ergebnis: {heim: 0, gast: 0} },
            { spiel: spieltagDrei[2], ergebnis: {heim: 3, gast: 0} },
            { spiel: spieltagDrei[3], ergebnis: {heim: 0, gast: 1} },
            { spiel: spieltagDrei[4], ergebnis: {heim: 1, gast: 4} },
            { spiel: spieltagDrei[5], ergebnis: {heim: 2, gast: 1} },
            { spiel: spieltagDrei[6], ergebnis: {heim: 3, gast: 0} },
            { spiel: spieltagDrei[7], ergebnis: {heim: 3, gast: 1} },
            { spiel: spieltagDrei[8], ergebnis: {heim: 2, gast: 1} }
        ]
    ];

    var spieltage = [
        {id: 1, spieltag: spieltagEins},
        {id: 2, spieltag: spieltagZwei},
        {id: 3, spieltag: spieltagDrei},
        {id: 4, spieltag: spieltagVier}
    ];

    var regExIncludes = new RegExp('includes/(.+)');
    var regExPartials = new RegExp('partials/(.+)');
    var regExTypeahead = new RegExp('template/typeahead/(.+)');

    var regExVerein = new RegExp('rest/vereine/([0-9]+)');
    var regExSpiel = new RegExp('rest/spieltage/([0-9]+)/([0-9]+)');
    var regExSpieltag = new RegExp('rest/spieltag/([0-9]+)');
    var regExtBulkOne = new RegExp('rest/bulk/([0-9]+)');

    // GET: /rest/vereine
    $httpBackend.whenGET('/rest/vereine').respond(vereine);
    // GET: /rest/spieltage
    $httpBackend.whenGET('/rest/spieltage').respond(spieltage);

    // GET: /rest/vereine/:id
    $httpBackend.whenGET({
        test: function (url) {
            return regExVerein.test(url);
        }
    }).respond(function (method, url) {
        var id = parseInt(url.match(regExVerein)[1]);
        var index = _.findIndex(vereine, {id: id});

        return index === -1 ? [404, 'Not found'] : [200, vereine[index]];
    });

    // GET: /rest/spieltag/:id
    $httpBackend.whenGET({
        test: function (url) {
            return regExSpieltag.test(url);
        }
    }).respond(function (method, url) {
        var id = parseInt(url.match(regExSpieltag)[1]);
        var index = _.findIndex(spieltage, {id: id});

        return index === -1 ? [404, 'Not found'] : [200, spieltage[index]];
    });

    $httpBackend.whenGET({
        test: function (url) {
            return regExtBulkOne.test(url);
        }
    }).respond(function (method, url) {
        var id = parseInt(url.match(regExtBulkOne)[1]);

        return [200, ergebnisse[id - 1]];
    });

    // GET: /rest/spieltage/:spieltag/:spiel
    $httpBackend.whenGET({
        test: function (url) {
            return regExSpiel.test(url);
        }
    }).respond(function (method, url) {
        var match = url.match(regExSpiel);
        var spieltag = parseInt(match[1]);
        var spiel = parseInt(match[2]);
        var indexSpieltag = _.findIndex(spieltage, {id: spieltag});
        var indexSpiel = _.findIndex(spieltage[indexSpieltag].spieltag, {id: spiel});

        return (indexSpieltag === -1 || indexSpiel === -1) ? [404, 'Not found'] : [200, spieltage[indexSpieltag].spieltag[indexSpiel]];
    });

    // PUT: /rest/spieltage/:spieltag/:spiel {ergebnis}
    $httpBackend.whenPUT({
        test: function (url) {
            return regExSpiel.test(url);
        }
    }).respond(function (method, url, ergebnis) {
        var match = url.match(regExSpiel);
        var spieltag = parseInt(match[1]);
        var spiel = parseInt(match[2]);
        var indexSpieltage = _.findIndex(spieltage, {id: spieltag});
        var indexSpiel = _.findIndex(spieltage[indexSpieltage].spieltag, {id: spiel});

        var heim = spieltage[indexSpieltage].spieltag[indexSpiel].heim;
        var gast = spieltage[indexSpieltage].spieltag[indexSpiel].gast;
        var begegnung = spieltage[indexSpieltage].spieltag[indexSpiel];

        ergebnis = JSON.parse(ergebnis);

        if (begegnung.hasResult) {
            return [403, 'Not possible yet'];
        }

        if ((ergebnis.heim !== undefined && ergebnis.heim !== null) && (ergebnis.gast !== undefined && ergebnis.gast !== null)) {
            begegnung.toreHeim = ergebnis.heim;
            begegnung.toreGast = ergebnis.gast;
            begegnung.hasResult = true;

            heim.torePlus += ergebnis.heim;
            heim.toreMinus += ergebnis.gast;
            heim.tordifferenz = heim.torePlus - heim.toreMinus;

            gast.torePlus += ergebnis.gast;
            gast.toreMinus += ergebnis.heim;
            gast.tordifferenz = gast.torePlus - gast.toreMinus;

            heim.spiele += 1;
            gast.spiele += 1;

            if (ergebnis.heim > ergebnis.gast) { // Sieger Heim
                heim.siege += 1;
                gast.niederlagen += 1;
                heim.punkte += 3;
            } else if (ergebnis.heim < ergebnis.gast) { // Sieger Gast
                gast.siege += 1;
                heim.niederlagen += 1;
                gast.punkte += 3;
            } else {
                heim.unentschieden += 1;
                gast.unentschieden += 1;
                heim.punkte += 1;
                gast.punkte += 1;
            }
        } else {
            return [400, 'Missing Result Object'];
        }

        return [200, begegnung];
    });

    // GET: /rest/bulk
    $httpBackend.whenGET('/rest/bulk').respond(ergebnisse);

    $httpBackend.whenGET({
        test: function (url) {
            return (regExIncludes.test(url) || regExPartials.test(url) || regExTypeahead.test(url));
        }
    }).passThrough();
});