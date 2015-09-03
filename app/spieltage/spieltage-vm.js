var SpieltageVM = function ($http, $route) {
    var self = this;

    this.splitAction = "Spieltag ausw\u00e4hlen";
    this.spieltage = [];
    this.spieltag = {};

    this.selectSpieltag = function (id) {
        self.splitAction = id + ". Spieltag";

        $http.get('/rest/spieltag/' + id).then(function (result) {
            self.spieltag = result.data;
        }).catch(function (result) {
            console.log(result);
        });
    };

    $http.get('/rest/spieltage').then(function (result) {
        self.spieltage = result.data;
    }).catch(function (result) {
        console.log(result);
    });

    this.setBulkForSpieltag = function () {
        if (angular.equals({}, self.spieltag)) {
            $http.get('/rest/bulk').then(function (result) {
                angular.forEach(result.data, function (bulkSpieltag, index) {
                    setResult(index, bulkSpieltag);
                });

                $route.reload();
            }).catch(function (result) {
                console.log(result);
            });
        } else {
            $http.get('/rest/bulk/' + self.spieltag.id).then(function (result) {
                setResult(self.spieltag.id - 1, result.data);

                $route.reload();
            }).catch(function (result) {
                console.log(result);
            });

        }
    };

    function setResult(index, bulkSpieltag) {
        angular.forEach(bulkSpieltag, function (spieltag) {
            var id = index + 1;
            $http.put('/rest/spieltage/' + id + '/' + spieltag.spiel.id, spieltag.ergebnis).catch(function (result) {
                console.log(result);
            })
        });
    }

};