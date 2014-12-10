/// <reference path="../managers/assets.ts" />

module objects
{
    export class Tank
    {
        image: createjs.Bitmap;
        public shellFired: boolean;
        public tankY: number;

        constructor()
        {
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("tank"));
            this.image.regY = this.image.getBounds().height * 0.5;
            this.image.y = 200;
            this.image.x = 700;
            stage.addChild(this.image);
            createjs.Sound.play("engine", 0, 0, 0, -1, 1, 1);
            createjs.Sound.play("soundtrack", 0, 0, 0, -1, 1, 1);

        }

        update()
        {
            this.image.y = stage.mouseY;
            this.tankY = this.image.y;
        }

        
        // Bind key actions to player events
        private _assignControls() {
            console.log("Assign Controls");
            window.onkeydown = this._onControlDown;
            window.onkeyup = this._onControlUp;
        }

        // Switch statement to activate movement and rotation
        private _onControlDown(event: KeyboardEvent) {
            switch (event.keyCode) {
                case keys.SPACE:
                    controls.SHELL = true;
                    break;
            }
        }

        private _onControlUp(event: KeyboardEvent) {
            switch (event.keyCode) {
                case keys.SPACE:
                    controls.SHELL = false;
                    break;
            }
        }

        // Respond to player key presses
        private _controlAction() {

            //if (controls.SPACE) {
                
            //}

        }

    }
} 