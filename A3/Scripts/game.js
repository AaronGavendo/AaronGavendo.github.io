﻿/// <reference path="managers/assets.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/tanks.ts" />
/// <reference path="objects/grass.ts" />
/// <reference path="objects/tnt.ts" />
/// <reference path="objects/nazi.ts" />
var stage;

var grass;
var tank;
var tnt = [];
var nazis = [];
var scoreboard;

var LIVES_NUM = 3;
var NAZI_NUM = 4;
var TNT_NUM = 2;

var GAME_FONT = "34px Consolas";
var FONT_COLOUR = "#FF0000";

function init() {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    main();
}

function gameLoop(event) {
    grass.update();
    tank.update();
    for (var t = 0; t < TNT_NUM; t++) {
        tnt[t].update();
    }
    for (var n = 0; n < NAZI_NUM; n++) {
        nazis[n].update();
    }

    collision();
    scoreboard.update();
    stage.update();
}

function tankAndTNT() {
    for (var a = 0; a < TNT_NUM; a++) {
        var p1;
        var p2;

        p1 = new createjs.Point();
        p2 = new createjs.Point();

        p1.x = tank.image.x;
        p1.y = tank.image.y;
        p2.x = tnt[a].image.x;
        p2.y = tnt[a].image.y;

        if (distance(p1, p2) < ((tank.image.getBounds().height * 0.5) + (tnt[a].image.getBounds().height * 0.5))) {
            createjs.Sound.play("boom");
            scoreboard.lives -= 1;
            tnt[a].reset();
            stage.update();
        }
    }
}

function tankAndNazi() {
    for (var a = 0; a < NAZI_NUM; a++) {
        var p1;
        var p2;
        var p3;

        p1 = new createjs.Point();
        p2 = new createjs.Point();
        p3 = new createjs.Point();

        p1.x = tank.image.x;
        p1.y = tank.image.y;
        p2.x = nazis[a].image.x;
        p2.y = nazis[a].image.y;
        p3.x = 800;

        if (distance(p1, p2) < ((tank.image.getBounds().height * 0.5) + (nazis[a].image.getBounds().height * 0.5))) {
            console.log("Tank:Nazi Collision Run");
            createjs.Sound.play("death");
            scoreboard.score += 1;
            nazis[a].reset();
            stage.update();
        } else if (p2.x > 799) {
            console.log("Nazi Missed Collision Run");
            nazis[a].reset();
            scoreboard.missed += 1;

            stage.update();
        }
    }
}

function collision() {
    tankAndTNT();
    tankAndNazi();
}

//Distance between two points //From Teacher Example
function distance(p1, p2) {
    var result = 0;
    var xPoints = 0;
    var yPoints = 0;

    xPoints = p2.x - p1.x;
    xPoints = xPoints * xPoints;

    yPoints = p2.y - p1.y;
    yPoints = yPoints * yPoints;

    result = Math.sqrt(xPoints + yPoints);

    return result;
}

function main() {
    grass = new objects.Grass();
    for (var i = 0; i < NAZI_NUM; i++) {
        nazis[i] = new objects.Nazi();
    }
    for (var o = 0; o < TNT_NUM; o++) {
        tnt[o] = new objects.TNT();
    }
    tank = new objects.Tank();
    scoreboard = new objects.Scoreboard();
}
//# sourceMappingURL=game.js.map
