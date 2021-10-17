'use strict';

let config = {
    type: Phaser.AUTO,
    width: 960,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {
                x: 0,
                y: 0
            }
        },

    },
    scene: [Title, Play]
}

let game = new Phaser.Game(config);

let keySPACE, keyLEFT, keyRIGHT, keyESC, keyUP, keyDOWN, keyA, keyW, keyS, keyD, keyTAB, keyR, keyF, keyENTER;

// Often used locations coordinates
let screenWidth = game.config.width;
let screenHeight = game.config.height;
let screenCenterX = game.config.width / 2;
let screenCenterY = game.config.height / 2;


