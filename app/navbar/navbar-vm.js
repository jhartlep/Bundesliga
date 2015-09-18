var NavbarVM = function ($location, $http) {
    var self = this;

    this.clubs = [];
    this.clubSelected = undefined;
    this.readOnly = true;

    this.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

    this.onSelect = function () {
        self.readOnly = false;
    };

    this.loadClub = function () {
        if (undefined !== self.clubSelected.id) {
            $location.path('/club/' + self.clubSelected.id);
        }
        self.clubSelected = undefined;
    };

    $http.get('/rest/clubs').then(function (result) {
        self.clubs = result.data;
    }).catch(function (result) {
        console.log(result);
    })
};