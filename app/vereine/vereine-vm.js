var VereineVM = function ($http) {
    var self = this;

    this.sortColumn = 'id';
    this.sortDirection = false;

    this.sortType = {
        id: 'fa-sort-desc',
        name: 'fa-sort',
        short: 'fa-sort'
    };

    this.setSortColumn = function (columnName) {
        if (this.sortColumn === columnName) {
            this.sortDirection = !this.sortDirection;
        } else {
            this.sortColumn = columnName;
            this.sortDirection = false;
        }

        angular.forEach(Object.keys(this.sortType), function (sortType) {
            if (sortType === columnName) {
                self.sortType[sortType] = (self.sortDirection) ? 'fa-sort-asc' : 'fa-sort-desc';
            } else {
                self.sortType[sortType] = 'fa-sort';
            }
        });
    };

    $http.get('/rest/vereine').then(function (result) {
        self.vereine = result.data;
    }).catch(function (result) {
        console.log(result);
    });
};