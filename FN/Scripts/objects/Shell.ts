/// <reference path="../managers/assets.ts" />
module objects {
    export class Shell {
        image: createjs.Bitmap;
        dy: number;
        tankLocation: number;

        constructor() {
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("shell"));
            this.image.regX = this.image.getBounds().width * 0.5;
            this.image.regY = this.image.getBounds().height * 0.5;
            this.reset();
            this.dy = 8; 
            stage.addChild(this.image);
        }

        reset() {
            this.image.x = 780;
            this.image.y = Math.floor(Math.random() * stage.canvas.height);
            this.image.y = TANK_POS;
        }

        update() {
            this.image.x -= this.dy;
            if (this.image.x <= 0) {
                this.reset();
            }
        }

        destroy() {
            stage.removeChild(this.image);
        }
    }

}
 