var Spiel = function (jsonObject) {
    var self = this;

    this.id = jsonObject.id;
    this.date = jsonObject.date;
    this.heim = jsonObject.heim;
    this.gast = jsonObject.gast;
    this.toreHeim = jsonObject.toreHeim;
    this.toreGast = jsonObject.toreGast;
    this.hasResult = false;
};