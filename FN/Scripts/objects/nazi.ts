/// <reference path="../managers/assets.ts" />
module objects
{
    export class Nazi
    {
        image: createjs.Bitmap;
        dy: number;
        rand: number;
        scoreboard: objects.Scoreboard;
        level: number;


        constructor() {
            console.log("Start");
            if (this.level == 1) {
                console.log("1");
                this.rand = Math.floor((Math.random() * 3) + 1);
                if (this.rand == 1) {
                    this.image = new createjs.Bitmap(managers.Assets.loader.getResult("nazi1"));
                }
                if (this.rand == 2) {
                    this.image = new createjs.Bitmap(managers.Assets.loader.getResult("nazi2"));
                }
                else if (this.rand == 3) {
                    this.image = new createjs.Bitmap(managers.Assets.loader.getResult("nazi3"));
                }
            }
            else if (this.level == 2) {
                console.log("2");
                this.image = new createjs.Bitmap(managers.Assets.loader.getResult("panzer"));
            }
            else if (this.level == 3) {
                console.log("3");
                this.image = new createjs.Bitmap(managers.Assets.loader.getResult("nazi3"));
            }
            else { console.log("LEVEL NAZI PICKER GOING TO ELSE"); }
            console.log("End");
            this.image.regX = this.image.getBounds().width * 0.5;
            this.image.regY = this.image.getBounds().height * 0.5;
            this.reset();
            stage.addChild(this.image);
        }

        reset() {
            this.dy = Math.floor(Math.random() * 5 + 5); 

            this.image.x = 0;
            this.image.y = Math.floor(Math.random() * stage.canvas.height);

        }

        update() {
            this.image.x += this.dy;
            if (this.image.x >= (stage.canvas.width + this.image.getBounds().width)) {
                this.reset();
            }
        }
    }
} 