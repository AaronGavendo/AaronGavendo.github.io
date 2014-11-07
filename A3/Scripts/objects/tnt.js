/// <reference path="../managers/assets.ts" />
var objects;
(function (objects) {
    var TNT = (function () {
        function TNT() {
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("tnt"));
            this.image.regX = this.image.getBounds().width * 0.5;
            this.image.regY = this.image.getBounds().height * 0.5;
            this.reset();
            this.dy = 4;
            stage.addChild(this.image);
        }
        TNT.prototype.reset = function () {
            this.image.x = 0;
            this.image.y = Math.floor(Math.random() * stage.canvas.height);
        };

        TNT.prototype.update = function () {
            this.image.x += this.dy;
            if (this.image.x >= (stage.canvas.width + this.image.getBounds().width)) {
                this.reset();
            }
        };
        return TNT;
    })();
    objects.TNT = TNT;
})(objects || (objects = {}));
//# sourceMappingURL=tnt.js.map
