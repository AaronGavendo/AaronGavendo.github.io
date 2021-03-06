﻿/// <reference path="../managers/assets.ts" />
var objects;
(function (objects) {
    var Scoreboard = (function () {
        function Scoreboard() {
            this.lives = LIVES_NUM;
            this.score = 0;
            this.missed = 0;
            this.level = 1;
            this.labelString = "";
            this.label = new createjs.Text(this.labelString, GAME_FONT, FONT_COLOUR);
            this.update();
        }
        Scoreboard.prototype.update = function () {
            if (this.lives <= 0) {
                this.labelString = "YOU ARE DEAD, STOP PLAYING";
                this.label.text = this.labelString;
            } else if (this.missed > 11) {
                this.labelString = "You missed 12! Your village was destroyed";
                this.label.text = this.labelString;
            } else {
                this.labelString = "Lives: " + this.lives.toString() + " Kills: " + this.score.toString() + " Missed: " + this.missed.toString() + " Level: " + this.level.toString();
                this.label.text = this.labelString;
            }
        };
        return Scoreboard;
    })();
    objects.Scoreboard = Scoreboard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map
