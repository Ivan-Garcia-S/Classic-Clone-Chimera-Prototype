class Title extends Phaser.Scene {
    //This is going to be the title scene.
    constructor() {
        super("titleScene");
    }
    preload(){
        this.load.path = './assets/'; 
        this.load.spritesheet('Player1', 'PlayerRed.png', {frameWidth: 32, frameHeight: 32});
        this.load.image('p2', 'Player_2.png');
        this.load.spritesheet('Player2', 'PlayerBlueF.png', {frameWidth: 32, frameHeight: 32});
        this.load.image('tempBG', 'tempBG.png');
    }
    create(){
        let textConfig = {
            fontFamily: 'Russo One',
            fontSize: '14px',
            color: '#FEFEFE',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        let title = {
            fontFamily: 'Russo One',
            fontSize: '28px',
            color: '#FEFEFE',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.image(game.config.width/2, game.config.height/2,'tempBG');
        this.add.text(game.config.width/2, game.config.height/2 - 100,'Prototype chimera game',title).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Press R to start the game').setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 100, 'Instructions:WASD for player1. Arrow keys for player2\nF for p1. Rctrl for p2.').setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 150, 'Collect all coins to win the game and kill the ghosts with your sword.').setOrigin(0.5);
        
        this.add.image(150, game.config.height/2, 'Player1').setOrigin(0.5).setScale(2);
        this.add.image(750, game.config.height/2,'Player2').setOrigin(0.5).setScale(2);
        
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        

    }
    update(){
        if (keyR.isDown){
            // start next scene
            this.scene.start('playScene');
        }
    }
    
}