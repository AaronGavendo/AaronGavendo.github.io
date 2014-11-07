/// <reference path="../managers/assets.ts" />
var objects;
(function (objects) {
    var Grass = (function () {
        function Grass() {
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("grass"));
            this.reset();
            this.dy = 4; //Keep same as TNT to make look like its on ground
            stage.addChild(this.image);
        }
        Grass.prototype.reset = function () {
            this.image.x = -this.image.getBounds().width + stage.canvas.width;
        };

        Grass.prototype.update = function () {
            this.image.x += this.dy;
            if (this.image.x >= 0) {
                this.reset();
            }
        };
        return Grass;
    })();
    objects.Grass = Grass;
})(objects || (objects = {}));
//# sourceMappingURL=grass.js.map
