class Enemy extends Phaser.GameObjects.Sprite {
    constructor(scene) {
        super(scene);

        //Add object to existing scene
        scene.add.existing(this);
        scene.load.image('enemy', './assets/Temp_Enemy.png');
        this = scene.physics.add.sprite('enemy', 400,400);


        
        

        
    }
}