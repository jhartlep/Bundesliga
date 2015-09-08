var Match = function (jsonObject) {
    var self = this;

    this.id             = jsonObject.id;
    this.date           = jsonObject.date;
    this.home           = jsonObject.home;
    this.visitor        = jsonObject.visitor;
    this.goalsHome      = jsonObject.goalsHome;
    this.goalsVisitor   = jsonObject.goalsVisitor;
    this.matchDay       = jsonObject.matchDay;
    this.hasResult      = false;
};