class Title extends Phaser.Scene {
    //This is going to be the title scene.
    constructor() {
        super("titleScene");
    }
    preload(){
        this.load.path = './assets/'; 
        this.load.spritesheet('Player1', 'PlayerRed.png', {frameWidth: 32, frameHeight: 32});
        this.load.image('p2', 'Player_2.png');
        this.load.spritesheet('Player2', 'PlayerBlue.png', {frameWidth: 32, frameHeight: 32});
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
        this.p2 = new Player(this, 750, game.config.height/2, keyW, keyS, keyA, keyD, keyENTER, 'Player2').setScale(2);
        this.p2.flipX = true;
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        //Create Player Animations
        this.anims.create({
            key: 'idle1',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('Player1', { start: 0, end: 19 }),
        });
        this.anims.create({
            key: 'idle2',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('Player2', { start: 0, end: 19 }),
        });
        this.anims.create({
            key: 'attack1',
            frameRate: 16,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('Player1', { start: 20, end: 31 }),
        });
        this.anims.create({
            key: 'attack2',
            frameRate: 16,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('Player2', { start: 20, end: 31 }),
        });
        this.anims.create({
            key: 'walk1',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('Player1', { start: 32, end: 41 }),
        });
        this.anims.create({
            key: 'walk2',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('Player2', { start: 32, end: 41 }),
        });
        this.anims.create({
            key: 'throw1',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('Player1', { start: 42, end: 43 }),
        });
        this.anims.create({
            key: 'throw2',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('Player2', { start: 42, end: 43 }),
        });

    }
    update(){
        if (keyR.isDown){
            // start next scene
            this.scene.start('playScene');
        }
    }
    
}