/// <reference path="managers/assets.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/tanks.ts" />
/// <reference path="objects/grass.ts" />
/// <reference path="objects/shell.ts" />
/// <reference path="objects/tnt.ts" />
/// <reference path="objects/nazi.ts" />

var stage: createjs.Stage;

var grass: objects.Grass
var tank: objects.Tank
var shell = [];
var tnt = [];
var nazis = [];
var scoreboard: objects.Scoreboard;

var LIVES_NUM = 3;
var NAZI_NUM = 0;
var TNT_NUM = 0;
var SHL_NUM = 1;
var CURRENT_LEVEL = 1;
var TANK_POS = 5;
var SHOULD_CREATE = true;

var GAME_FONT = "24px Consolas";
var FONT_COLOUR = "#FF0000";

function init(): void {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    main();
}

function gameLoop(event): void {
    if (SHOULD_CREATE) {
        if (scoreboard.level === 1) {
            console.log("hello", scoreboard.level);
            NAZI_NUM = 2;
            nazis.push(new objects.Nazi());
            nazis.push(new objects.Nazi());
            SHOULD_CREATE = false;
        }
        else if (scoreboard.level === 2) {
            console.log("hello", scoreboard.level);
            NAZI_NUM = 3;
            nazis.push(new objects.Nazi());
            SHOULD_CREATE = false;
        }
        else if (scoreboard.level === 3) {
            NAZI_NUM = 3;
            TNT_NUM = 1;
            tnt.push(new objects.TNT());
            SHOULD_CREATE = false;
        }
        else if (scoreboard.level === 4) {
            console.log("hello", scoreboard.level);
            NAZI_NUM = 4;
            nazis.push(new objects.Nazi());
            TNT_NUM = 1;
            SHOULD_CREATE = false;
        }
        else if (scoreboard.level === 5) {
            console.log("hello", scoreboard.level);
            NAZI_NUM = 4;
            TNT_NUM = 2;
            tnt.push(new objects.TNT());
            SHOULD_CREATE = false;
        }
        else if (scoreboard.level === 6) {
            console.log("hello", scoreboard.level);
            NAZI_NUM = 5;
            nazis.push(new objects.Nazi());
            TNT_NUM = 3;
            tnt.push(new objects.TNT());
            SHOULD_CREATE = false;
        }
    }

    grass.update();
    tank.update();
    TANK_POS = tank.tankY;

    for (var t = 0; t < TNT_NUM; t++) {
        tnt[t].update();
    }

    for (var s = 0; s < SHL_NUM; s++) {
        shell[s].update();
    }

    for (var n = 0; n < NAZI_NUM; n++) {
        nazis[n].level = scoreboard.level;
        nazis[n].update();
    }

    collision();
    scoreboard.update();

    stage.update();
}

function tankAndTNT(){
    for (var a = 0; a < TNT_NUM; a++) {
        var p1: createjs.Point;
        var p2: createjs.Point;

        p1 = new createjs.Point();
        p2 = new createjs.Point();

        p1.x = tank.image.x;
        p1.y = tank.image.y;
        p2.x = tnt[a].image.x;
        p2.y = tnt[a].image.y;

        if (distance(p1, p2) < ((tank.image.getBounds().height * 0.5) + (tnt[a].image.getBounds().height * 0.5))) {
            createjs.Sound.play("boom");
            scoreboard.lives -= 1;
            LIVES_NUM -= 1;
            tnt[a].reset();
            stage.update();
        }
    }
}

function tankAndNazi() {
    for (var a = 0; a < NAZI_NUM; a++) {
        var p1: createjs.Point;
        var p2: createjs.Point;
        var p3: createjs.Point;

        p1 = new createjs.Point();
        p2 = new createjs.Point();
        p3 = new createjs.Point();

        p1.x = tank.image.x;
        p1.y = tank.image.y;
        p2.x = nazis[a].image.x;
        p2.y = nazis[a].image.y;
        p3.x = 800;


        if (distance(p1, p2) < ((tank.image.getBounds().height * 0.5) + (nazis[a].image.getBounds().height * 0.5)))
        {
            naziDies();
            nazis[a].reset();
            nazis[a].update();
            stage.update();

        }
        else if (p2.x >= 780)
        {
            scoreboard.missed += 1; 
            //This part will update the missed score if the enemy is missed
            nazis[a].pickEnemy();
            nazis[a].update();
            nazis[a].reset();
            stage.update();
        }
    }
}

function shellAndNazi() {
    for (var sn = 0; sn < SHL_NUM; sn++) {
        for (var a = 0; a < NAZI_NUM; a++) {
            var p1: createjs.Point;
            var p2: createjs.Point;
            var p3: createjs.Point;

            p1 = new createjs.Point();
            p2 = new createjs.Point();
            p3 = new createjs.Point();

            p1.x = shell[sn].image.x;
            p1.y = shell[sn].image.y;
            p2.x = nazis[a].image.x;
            p2.y = nazis[a].image.y;
            p3.x = 800;


            if (distance(p1, p2) < ((shell[sn].image.getBounds().height * 0.5) + (nazis[a].image.getBounds().height * 0.5)))
            {
                naziDies();
                nazis[a].reset();
                stage.removeChild(shell[sn]);
                nazis[a].update();
                stage.update();
            }
            else if (p2.x >= 780) {
                scoreboard.missed += 1;
                //This part will update the missed score if the enemy is missed
                nazis[a].pickEnemy();
                nazis[a].update();
                nazis[a].reset();
                stage.update();
            }
        }
    }
}

function shellAndTNT() {
    for (var st = 0; st < SHL_NUM; st++) {
        for (var a = 0; a < TNT_NUM; a++) {
            var p1: createjs.Point;
            var p2: createjs.Point;
            var p3: createjs.Point;

            p1 = new createjs.Point();
            p2 = new createjs.Point();
            p3 = new createjs.Point();

            p1.x = shell[st].image.x;
            p1.y = shell[st].image.y;
            p2.x = tnt[a].image.x;
            p2.y = tnt[a].image.y;
            p3.x = 800;


            if (distance(p1, p2) < ((shell[st].image.getBounds().height * 0.5) + (tnt[a].image.getBounds().height * 0.5))) {
                createjs.Sound.play("boom"); 
                tnt[a].reset();
                stage.removeChild(shell[st]);
                tnt[a].update();
                stage.update();

            }
            else if (p2.x >= 780) {
                tnt[a].update();
                tnt[a].reset();
                stage.update();
            }
        }
    }
}

function naziDies() {
    //This fumction saves me running this twice in each of the Nazi collisions.
    var oldValue = scoreboard.level;
    createjs.Sound.play("death");
    scoreboard.score += 1;
    if (scoreboard.score >= 15) {   //15 kills per a level was chosen to allow testers and teacher to play the -
        scoreboard.level = 2;       // - levels much faster
    }
    if (scoreboard.score >= 30) {
        scoreboard.level = 3;
    }
    if (scoreboard.score >= 45) {
        scoreboard.level = 4;
    }
    if (scoreboard.score >= 60) {
        scoreboard.level = 5;
    }
    if (scoreboard.score >= 75) {
        scoreboard.level = 6;
    }
    if (scoreboard.level !== oldValue) {
        SHOULD_CREATE = true;
    }
}

function collision() {
    tankAndTNT();
    tankAndNazi();
    shellAndNazi();
    shellAndTNT();
}

//Distance between two points //From Teacher Example
function distance(p1: createjs.Point, p2: createjs.Point): number {
    var result: number = 0;
    var xPoints: number = 0;
    var yPoints: number = 0;

    xPoints = p2.x - p1.x;
    xPoints = xPoints * xPoints;

    yPoints = p2.y - p1.y;
    yPoints = yPoints * yPoints;

    result = Math.sqrt(xPoints + yPoints);

    return result;
}

function main(): void{
    scoreboard = new objects.Scoreboard();
    grass = new objects.Grass();
    for (var s2 = 0; s2 < SHL_NUM; s2++) {
        shell[s2] = new objects.Shell();
    }
    tank = new objects.Tank();
    stage.addChild(scoreboard.label);
}