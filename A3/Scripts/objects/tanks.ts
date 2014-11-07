/// <reference path="../managers/assets.ts" />
module objects {
    export class Tank {
        image: createjs.Bitmap;
        constructor() {
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("tank"));
            this.image.regY = this.image.getBounds().height * 0.5;
            this.image.y = 200;
            this.image.x = 700;
            stage.addChild(this.image);
            createjs.Sound.play("engine", 0, 0, 0, -1, 1, 1);
        }

        update() {
            this.image.y = stage.mouseY;

        }
    }
} 