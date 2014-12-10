/// <reference path="../managers/assets.ts" />
var objects;
(function (objects) {
    var Tank = (function () {
        function Tank() {
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("tank"));
            this.image.regY = this.image.getBounds().height * 0.5;
            this.image.y = 200;
            this.image.x = 700;
            stage.addChild(this.image);
            createjs.Sound.play("engine", 0, 0, 0, -1, 1, 1);
            createjs.Sound.play("soundtrack", 0, 0, 0, -1, 1, 1);
        }
        Tank.prototype.update = function () {
            this.image.y = stage.mouseY;
            this.tankY = this.image.y;
        };

        // Bind key actions to player events
        Tank.prototype._assignControls = function () {
            console.log("Assign Controls");
            window.onkeydown = this._onControlDown;
            window.onkeyup = this._onControlUp;
        };

        // Switch statement to activate movement and rotation
        Tank.prototype._onControlDown = function (event) {
            switch (event.keyCode) {
                case keys.SPACE:
                    controls.SHELL = true;
                    break;
            }
        };

        Tank.prototype._onControlUp = function (event) {
            switch (event.keyCode) {
                case keys.SPACE:
                    controls.SHELL = false;
                    break;
            }
        };

        // Respond to player key presses
        Tank.prototype._controlAction = function () {
            //if (controls.SPACE) {
            //}
        };
        return Tank;
    })();
    objects.Tank = Tank;
})(objects || (objects = {}));
//# sourceMappingURL=tanks.js.map
