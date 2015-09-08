var Club = function (jsonObject) {
    var self = this;

    this.id         = jsonObject.id;
    this.name       = jsonObject.name;
    this.shortcut   = jsonObject.shortcut;

    this.matches    = 0;
    this.victories  = 0;
    this.draws      = 0;
    this.defeats    = 0;
    this.goalsShot  = 0;
    this.goalsTaken = 0;
    this.goalsDiff  = 0;
    this.points     = 0;
};