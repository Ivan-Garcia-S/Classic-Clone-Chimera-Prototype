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
    scene: [Play]
}

let game = new Phaser.Game(config);

let keySPACE, keyLEFT, keyRIGHT, keyESC, keyUP, keyDOWN, keyA, keyW, keyS, keyD, keyTAB, keyR;

//lists of contracts and upgrades
let contractInfo = {
    postName: this.currentCompany,
    infoOne: 'Your life savings were',
    infoTwo: 'spent opening this up.',
    infoThree: 'It better have been',
    infoFour: 'worth it...',
    ammount: 'Motivation'
};



// Often used locations coordinates
let screenWidth = game.config.width;
let screenHeight = game.config.height;
let screenCenterX = game.config.width / 2;
let screenCenterY = game.config.height / 2;


