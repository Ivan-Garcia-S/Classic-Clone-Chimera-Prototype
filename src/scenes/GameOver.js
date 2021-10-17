class GameOver extends Phaser.Scene{
    constructor() {
        super("gameOverScene");
    }
    preload(){
        
    }
    create(){
        let textconfig = {
            fontFamily: 'Russo One',
            fontSize: '12px',
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
            fontSize: '32px',
            color: '#FEFEFE',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.image(game.config.width/2, game.config.height/2,'tempBG');
        

        this.title = this.add.text(-100, game.config.height/2,'Game Over!', title);
        this.text = this.add.text(-100,game.config.height/2 + 100, "Press R to play again", textconfig);
        
    }
    update(){
        this.tweens.add({
            targets: this.title,
            x: 450,
            duration: 500,
            ease: 'Power2',
            
        });
        this.tweens.add({
            targets: this.text,
            x: 450,
            duration: 500,
            ease: 'Power2',
            
        });
    }
}