/// <reference path="scoreboard.ts" />
/// <reference path="../managers/assets.ts" />
var objects;
(function (objects) {
    var Nazi = (function () {
        function Nazi() {
            this.level = 1;
            this.rand = Math.floor((Math.random() * 3) + 1);
            if (this.rand == 1) {
                this.image = new createjs.Bitmap(managers.Assets.loader.getResult("nazi1"));
            } else if (this.rand == 2) {
                this.image = new createjs.Bitmap(managers.Assets.loader.getResult("nazi2"));
            } else if (this.rand == 3) {
                this.image = new createjs.Bitmap(managers.Assets.loader.getResult("nazi3"));
            }
            this.image.regX = this.image.getBounds().width * 0.5;
            this.image.regY = this.image.getBounds().height * 0.5;
            stage.addChild(this.image);
            this.reset();
        }
        Nazi.prototype.pickEnemy = function () {
            if (this.level == 2) {
                stage.removeChild(this.image);
                this.rand = Math.floor((Math.random() * 3) + 1);
                if (this.rand == 1) {
                    this.image = new createjs.Bitmap(managers.Assets.loader.getResult("nazi1"));
                } else if (this.rand == 2) {
                    this.image = new createjs.Bitmap(managers.Assets.loader.getResult("nazi2"));
                } else if (this.rand == 3) {
                    this.image = new createjs.Bitmap(managers.Assets.loader.getResult("nazi3"));
                }
                stage.addChild(this.image);
            }
            if (this.level == 3) {
                stage.removeChild(this.image);
                this.rand = Math.floor((Math.random() * 3) + 1);
                if (this.rand == 1) {
                    this.image = new createjs.Bitmap(managers.Assets.loader.getResult("nazi1"));
                } else if (this.rand == 2) {
                    this.image = new createjs.Bitmap(managers.Assets.loader.getResult("nazi2"));
                } else if (this.rand == 3) {
                    this.image = new createjs.Bitmap(managers.Assets.loader.getResult("nazi3"));
                }
                stage.addChild(this.image);
            }
            if (this.level == 4) {
                stage.removeChild(this.image);
                this.image = new createjs.Bitmap(managers.Assets.loader.getResult("car"));
                stage.addChild(this.image);
            }
            if (this.level == 5) {
                stage.removeChild(this.image);
                this.image = new createjs.Bitmap(managers.Assets.loader.getResult("car"));
                stage.addChild(this.image);
            }
            if (this.level == 6) {
                stage.removeChild(this.image);
                this.image = new createjs.Bitmap(managers.Assets.loader.getResult("panzer"));
                stage.addChild(this.image);
            }

            this.image.regX = this.image.getBounds().width * 0.5;
            this.image.regY = this.image.getBounds().height * 0.5;
            this.reset();
        };

        Nazi.prototype.reset = function () {
            this.dy = Math.floor(Math.random() * 5 + 5);
            this.image.x = 0;
            this.image.y = Math.floor(Math.random() * stage.canvas.height);
        };

        Nazi.prototype.update = function () {
            this.image.x += this.dy;
            if (this.image.x >= (stage.canvas.width)) {
                this.reset();
                this.pickEnemy();
            }
        };
        return Nazi;
    })();
    objects.Nazi = Nazi;
})(objects || (objects = {}));
//# sourceMappingURL=nazi.js.map
