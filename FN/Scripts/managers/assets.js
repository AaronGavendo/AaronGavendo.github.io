﻿var managers;
(function (managers) {
    var Assets = (function () {
        function Assets() {
        }
        Assets.preload = function () {
            var manifest = [
                { id: "grass", src: "images/Grass.png" },
                { id: "tank", src: "images/Tank.png" },
                { id: "tnt", src: "images/TNT.png" },
                { id: "nazi1", src: "images/Nazi1.png" },
                { id: "nazi2", src: "images/Nazi2.png" },
                { id: "nazi3", src: "images/Nazi3.png" },
                { id: "panzer", src: "images/king_tiger.png" },
                { id: "car", src: "images/car.png" },
                { id: "shell", src: "images/shell.png" },
                { id: "boom", src: "sounds/boom.wav" },
                { id: "engine", src: "sounds/engine.wav" },
                { id: "soundtrack", src: "sounds/soundtrack.mp3" },
                { id: "death", src: "sounds/death.mp3" }
            ];

            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.addEventListener("complete", init);
            this.loader.loadManifest(manifest);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=assets.js.map
