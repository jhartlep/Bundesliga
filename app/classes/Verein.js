var Verein = function (jsonObject) {
    var self = this;

    this.id = jsonObject.id;
    this.name = jsonObject.name;
    this.short = jsonObject.short;

    this.spiele = 0;
    this.siege = 0;
    this.unentschieden = 0;
    this.niederlagen = 0;
    this.torePlus = 0;
    this.toreMinus = 0;
    this.tordifferenz = 0;
    this.punkte = 0;
};