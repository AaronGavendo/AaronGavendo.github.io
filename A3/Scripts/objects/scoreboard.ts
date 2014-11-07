/// <reference path="../managers/assets.ts" />
module objects {
    export class Scoreboard {
        lives: number = LIVES_NUM;
        score: number = 0;
        missed: number = 0;
        label: createjs.Text;
        labelString: string = "";
        constructor() {
            this.label = new createjs.Text(this.labelString, GAME_FONT, FONT_COLOUR);
            this.update();
            stage.addChild(this.label);
        }
        update() {
            this.labelString = "Lives: " + this.lives.toString() + " Kills: " + this.score.toString() + " Missed: " + this.missed.toString();
            this.label.text = this.labelString;
        }
    }

}