/// <reference path="../managers/assets.ts" />
module objects {
    export class TNT {
        image: createjs.Bitmap;
        dy: number;

        constructor() {
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("tnt"));
            this.image.regX = this.image.getBounds().width * 0.5;
            this.image.regY = this.image.getBounds().height * 0.5;
            this.reset();
            this.dy = 4;
            stage.addChild(this.image);
        }

        reset() {
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