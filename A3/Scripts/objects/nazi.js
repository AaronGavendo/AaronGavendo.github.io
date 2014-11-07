/// <reference path="../managers/assets.ts" />
var objects;
(function (objects) {
    var Nazi = (function () {
        function Nazi() {
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("nazi1"));
            this.image.regX = this.image.getBounds().width * 0.5;
            this.image.regY = this.image.getBounds().height * 0.5;
            this.reset();
            stage.addChild(this.image);
        }
        Nazi.prototype.reset = function () {
            this.dy = Math.floor(Math.random() * 5 + 5); //Random speed of TNT
            this.image.x = 0;
            this.image.y = Math.floor(Math.random() * stage.canvas.height);
        };

        Nazi.prototype.update = function () {
            this.image.x += this.dy;
            if (this.image.x >= (stage.canvas.width + this.image.getBounds().width)) {
                this.reset();
            }
        };
        return Nazi;
    })();
    objects.Nazi = Nazi;
})(objects || (objects = {}));
//# sourceMappingURL=nazi.js.map
