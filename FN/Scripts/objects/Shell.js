/// <reference path="../managers/assets.ts" />
var objects;
(function (objects) {
    var Shell = (function () {
        function Shell() {
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("shell"));
            this.image.regX = this.image.getBounds().width * 0.5;
            this.image.regY = this.image.getBounds().height * 0.5;
            this.reset();
            this.dy = 8;
            stage.addChild(this.image);
        }
        Shell.prototype.reset = function () {
            this.image.x = 780;
            this.image.y = Math.floor(Math.random() * stage.canvas.height);
            this.image.y = TANK_POS;
        };

        Shell.prototype.update = function () {
            this.image.x -= this.dy;
            if (this.image.x <= 0) {
                this.reset();
            }
        };

        Shell.prototype.updatePosition = function (Position) {
        };

        Shell.prototype.destroy = function () {
            stage.removeChild(this.image);
        };
        return Shell;
    })();
    objects.Shell = Shell;
})(objects || (objects = {}));
//# sourceMappingURL=Shell.js.map
