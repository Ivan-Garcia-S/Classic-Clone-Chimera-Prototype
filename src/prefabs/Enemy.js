class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        //Add object to existing scene
        scene.add.existing(this);
        scene.physics.add.existing(this);
        //scene.load.image('enemy', './assets/Temp_Enemy.png');
        //this = scene.physics.add.sprite(400,400, 'enemy');

        this.health = 5;
        
        let velX = Math.floor(Math.random() * (40) + 20);
        let velY = 50;

        if (Math.random() > .5){
            velX *= -1;
        }

        this.body.setVelocity(velX,velY);
        //this.body.setBounce(1,1);
        
        
        
        
    }
    enemyDeathAnim() {
        this.anims.play('enemydeath', true);
        this.body.setVelocity(0,0);
        this.body.immovable = true;
    }
}