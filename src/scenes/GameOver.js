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
        this.text = this.add.text(-100,game.config.height/2 + 100, "Press R to play again. E to return to title.", textconfig).setOrigin(0.5);
        this.p1Wins = this.add.text(-100, game.config.height/2 + 150,"p1 wins the game!\nPlayer 1's Score: "+ p1FinalScore + "Player 2's Score: " + p2FinalScore, textconfig).setOrigin(0.5);
        this.p2Wins = this.add.text(-100, game.config.height/2 + 150,"p2 wins the game! "+ p1FinalScore + "Player 2's Score: " + p2FinalScore, textconfig).setOrigin(0.5);
        this.tie = this.add.text(-100, game.config.height/2 + 150,"the game is a tie. "+ p1FinalScore + "Player 2's Score: " + p2FinalScore, textconfig).setOrigin(0.5);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        
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
        if(p1FinalScore > p2FinalScore){
            this.tweens.add({
                targets: this.p1Wins,
                x: 450,
                duration: 500,
                ease: 'Power2',
                
            });
        }
        if(p2FinalScore > p1FinalScore){
            this.tweens.add({
                targets: this.p2Wins,
                x: 450,
                duration: 500,
                ease: 'Power2',
                
            });
        }
        if (keyR.isDown){
            // start next scene
            this.scene.start('playScene');
        }
        if (keyE.isDown){
            // start next scene
            this.scene.start('titleScene');
        }
    }
}