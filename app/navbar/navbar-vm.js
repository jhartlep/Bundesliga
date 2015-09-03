var NavbarVM = function ($location, $http) {
    var self = this;

    this.vereine = [];
    this.vereinSelected = undefined;
    this.readOnly = true;

    this.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

    this.onSelect = function () {
        self.readOnly = false;
    };

    this.loadVerein = function () {
        if (undefined !== self.vereinSelected.id) {
            $location.path('/verein/' + self.vereinSelected.id);
        }
    };

    $http.get('/rest/vereine').then(function (result) {
        self.vereine = result.data;
    }).catch(function (result) {
        console.log(result);
    })
};