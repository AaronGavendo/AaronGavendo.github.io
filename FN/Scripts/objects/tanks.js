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
        }
        Tank.prototype.update = function () {
            this.image.y = stage.mouseY;
        };
        return Tank;
    })();
    objects.Tank = Tank;
})(objects || (objects = {}));
//# sourceMappingURL=tanks.js.map
