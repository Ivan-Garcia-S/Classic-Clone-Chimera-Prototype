class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, up, down, left, right, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.VELOCITY = 80;
        this.ACTION = false;

        this.scene = scene;
        this.dir = "Right";
        this.score = 0;

        //Keys for player movement
        this.up = up;
        this.down = down;
        this.right = right;
        this.left = left

        //Initialize starting animation to idle
        if (this.texture.key == "Player1") {
            this.anims.play('idle1', true);
        } else {
            this.anims.play('idle2', true);
        }
    }

    update(scene) {
        this.ACTION = false;

        //Play running animation when moving and idle when standing still
        if (this.body.velocity.x != 0 || this.body.velocity.y !=0) {
            if (this.texture.key == "Player1") {
                this.anims.play('walk1', true);
            } else {
                this.anims.play('walk2', true);
            }
        } else {
            if (this.texture.key == "Player1") {
                this.anims.play('idle1', true);
            } else {
                this.anims.play('idle2', true);
            }
        }

        //One Direction player movement
        if(this.down.isDown == true){
            this.body.velocity.y = this.VELOCITY;
            this.body.velocity.x = 0;
            this.ACTION = true;
            if(this.dir == "Left"){
                this.flipX = false;
                this.angle = 90;
                this.dir = "Down";
            }
            else if(this.dir == "Up"){
                this.angle = 90;
                this.dir = "Down";
            }
            else if(this.dir == "Right"){
                this.angle = 90;
                this.dir = "Down";
            }
            this.dir = "Down";
        }
    
        if(this.up.isDown == true) {
            this.body.velocity.y = -this.VELOCITY;
            this.body.velocity.x = 0;
            this.ACTION = true;
            if(this.dir == "Left"){
                this.flipX = false;
                this.angle = -90
                this.dir = "Up";
            }
            else if(this.dir == "Down"){
                this.angle = -90;
                this.dir = "Up";
            }
            else if(this.dir == "Right"){
                this.angle = -90;
                this.dir = "Up";
            }
            this.dir = "Up";
        }

        if(this.left.isDown == true) {
            this.body.velocity.x = -this.VELOCITY;
            this.body.velocity.y = 0;
            this.ACTION = true;
            if(this.dir == "Right"){
                this.flipX = true;
                this.dir = "Left";
            }
            else if(this.dir == "Up"){
                this.angle = 0;
                this.flipX = true;
                this.dir = "Left";
            }
            else if(this.dir == "Down"){
                this.angle = 0;
                this.flipX = true;
                this.dir = "Left";
            }
            this.dir = "Left";
        }

        if(this.right.isDown == true) {
            this.body.velocity.x = this.VELOCITY;
            this.body.velocity.y = 0;
            this.ACTION = true;
            if(this.dir == "Left"){
                this.flipX= false;
                this.dir = "Right";
            }
            else if(this.dir == "Up"){
                this.angle = 0;
                this.dir = "Right";
            }
            else if(this.dir == "Down"){
                this.angle = 0;
                this.dir = "Right";
            }
            this.dir = "Right";
        }

        //Diagonal player movement
        if(this.down.isDown == true && this.right.isDown == true) {
            this.body.velocity.x = this.VELOCITY;
            this.body.velocity.y = this.VELOCITY;
            this.ACTION = true;
        }

        if(this.down.isDown == true && this.left.isDown == true) {
            this.body.velocity.x = -this.VELOCITY;
            this.body.velocity.y = this.VELOCITY;
            this.ACTION = true;
        }

        if(this.up.isDown == true && this.left.isDown == true) {
            this.body.velocity.x = -this.VELOCITY;
            this.body.velocity.y = -this.VELOCITY;
            this.ACTION = true;
        }

        if(this.up.isDown == true && this.right.isDown == true) {
            this.body.velocity.x = this.VELOCITY;
            this.body.velocity.y = -this.VELOCITY;
            this.ACTION = true;
        }

        //if nothing being pressed, set Vel to 0
        if(this.ACTION == false) {
            this.body.velocity.y = 0;
            this.body.velocity.x = 0;
        }
    }

}