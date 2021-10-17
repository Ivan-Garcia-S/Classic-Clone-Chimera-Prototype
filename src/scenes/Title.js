class Title extends Phaser.Scene {
    //This is going to be the title scene.
    constructor() {
        super("titleScene");
    }
    preload(){
        this.load.path = './assets/'; 
        this.load.spritesheet('Player1', 'PlayerRed.png', {frameWidth: 32, frameHeight: 32});
        this.load.image('p2', 'Player_2.png');
        this.load.spritesheet('flippedPlayer', 'PlayerBlueF.png', {frameWidth: 32, frameHeight: 32});
        this.load.image('tempBG', 'tempBG1.png');
    }
    create(){
        let textConfig = {
            fontFamily: 'Atari',
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
            fontFamily: 'Atari',
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
        this.add.text(game.config.width/2, game.config.height/2, 'Press R to start the game', textConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 100, 'Arrow keys for player1, Instructions:WASD for player2. \nEnter to attack for p1.F to attack for p2.\nThe red samurai is player1 and the blue one is player2', textConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 150, 'Collect the most coins on the map to win the game and kill the ghosts with your \nsword to defend yourself.' ,textConfig).setOrigin(0.5);
        this.add.text(150,game.config.height/2 + 50, 'p1').setOrigin(0.5).setScale(2);
        this.add.text(750,game.config.height/2 + 50, 'p2').setOrigin(0.5).setScale(2);
        this.add.image(150, game.config.height/2, 'Player1').setOrigin(0.5).setScale(2);
        this.add.image(750, game.config.height/2,'flippedPlayer').setOrigin(0.5).setScale(2);
        
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        

    }
    update(){
        if (keyR.isDown){
            // start next scene
            this.scene.start('playScene');
        }
    }
    
}