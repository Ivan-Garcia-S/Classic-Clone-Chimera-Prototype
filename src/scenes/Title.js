class Title extends Phaser.Scene {
    //This is going to be the title scene.
    constructor() {
        super("titleScene");
    }
    create(){
        let textConfig = {
            fontFamily: 'Arial',
            fontSize: '14px',
            color: '#FEFEFE',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.text(game.config.width/2, game.config.height/2, 'Press R to start the game', textConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 100, 'Instructions:WASD for player1. Arrow keys for player2\n F for p1. Rctrl for p2.', textConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 150, 'Attack floating enemies or avoid them.', textConfig).setOrigin(0.5);
        
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        
    }
    update(){
        if (keyR.isDown){
            // start next scene
            this.scene.start('playScene');
        }
    }
    
}