class Play extends Phaser.Scene {
    constructor() {
        super("playScene");

    }

    preload() {
        //Load all assets
        this.load.path = './assets/'; 
        this.load.image('trash', 'trash.png');
        this.load.image('squashed', 'Squashed.png');
        this.load.image('bg', 'FactoryBG.png');
        this.load.image('p1', 'Player_1.png');
        this.load.image('p2', 'Player_2.png');
        this.load.image('lvl', 'Level.png');
        this.load.image('LG_out', 'Large_outside.png');
        this.load.image('M_hor', 'Middle_horizontal.png');
        this.load.image('M_ver', 'Middle_vertical.png');
        this.load.image('SM_out', 'Small_outside.png');
        this.load.image('Top', 'Top_bottom.png');
        this.load.image('sides', 'Left_right.png');
        this.load.image('bullet', "Bullet.png");
        this.load.image('blip', 'Blip.png');
        this.load.image('enemy', 'Temp_Enemy.png');
        this.load.audio('hit', 'Hit.wav');  //Created by colorsCrimsonTears on freesound.org
        this.load.audio('coin', 'coin.wav');  //Created by SRJA_Gaming on freesound.org

    }

    create() {

        //Initialize data variables
        this.frameCount = 0;

        this.p1Stop = false;
        this.p2Stop = false;
        this.spawnEnemy = true;

        
        //Text configs
        this.defaultTextConfig = {fontFamily: 'purse', fontSize: '38px', backgroundColor: '#FFFFFF00', color: '#000000', align: 'center'};
        this.whiteTextConfig = {fontFamily: 'screen', fontSize: '40px', backgroundColor: '#00000033', color: '#FFFFFF', align: 'center'};
        this.scaleTextConfig = {fontFamily: 'screen', fontSize: '62px', backgroundColor: '#FFFFFF00', color: '#00FC10', align: 'center'};

        //Score Displays
        this.p1Score = this.add.text(200, 110, "P1: 0", this.whiteTextConfig).setOrigin(0,0)        
        this.p2Score = this.add.text(720, 110, "P2: 0", this.whiteTextConfig).setOrigin(0,0)

        this.restart = this.add.text(415, 20, "R to Restart", this.whiteTextConfig).setOrigin(0,0)
        
        //Groups
        this.recs = this.physics.add.group();
        this.shots = this.physics.add.group();
        this.blips = this.physics.add.group();
        this.enemies = this.physics.add.group();


        //Player Creation
        this.player1 = this.physics.add.sprite(415, 315,'p1');
        this.player1.setScale(.5);
        this.player1.dir = "Right";
        this.player1.score = 0;


        this.player2 = this.physics.add.sprite(575, 315,'p2');
        this.player2.setScale(.5);
        this.player2.flipX = true;
        this.player2.dir = "Left";
        this.player2.score = 0;

        //Borders
        this.wall1_1 = this.physics.add.image(140, 150, 'Top').setOrigin(0,0);
        this.wall1_1.setScale(.46,1);
        this.recs.add(this.wall1_1);
        this.wall1_1.setImmovable(true);

        this.wall1_2 = this.physics.add.image(550, 150, 'Top').setOrigin(0,0);
        this.wall1_2.setScale(.45,1);
        this.recs.add(this.wall1_2);
        this.wall1_2.setImmovable(true);

        this.wall1_3 = this.physics.add.image(463, 174, 'M_hor').setOrigin(0,0);
        this.wall1_3.setScale(.4,1);
        this.recs.add(this.wall1_3);
        this.wall1_3.setImmovable(true);

        this.wall2 = this.physics.add.image(140, 585, 'Top').setOrigin(0,0);
        this.recs.add(this.wall2);
        this.wall2.setImmovable(true);
        this.wall3 = this.physics.add.image(140, 150, 'sides').setOrigin(0,0);
        this.recs.add(this.wall3);
        this.wall3.setImmovable(true);
        this.wall4 = this.physics.add.image(840, 150, 'sides').setOrigin(0,0);
        this.recs.add(this.wall4);
        this.wall4.setImmovable(true);

        //Middle horizontal
        this.wall5 = this.physics.add.image(375, 230, 'M_hor').setOrigin(0,0);
        this.recs.add(this.wall5);
        this.wall5.setImmovable(true);
        this.wall6 = this.physics.add.image(375, 450, 'M_hor').setOrigin(0,0);
        this.recs.add(this.wall6);
        this.wall6.setImmovable(true);
        this.wall7 = this.physics.add.image(375, 515, 'M_hor').setOrigin(0,0);
        this.recs.add(this.wall7);
        this.wall7.setImmovable(true);
        
        //Middle vert
        this.wall8 = this.physics.add.image(450, 295, 'M_ver').setOrigin(0,0);
        this.recs.add(this.wall8);
        this.wall8.setImmovable(true);
        this.wall9 = this.physics.add.image(525, 295, 'M_ver').setOrigin(0,0);
        this.recs.add(this.wall9);
        this.wall9.setImmovable(true);
        

        //Outer sides
        this.wall10 = this.physics.add.image(225, 240, 'LG_out').setOrigin(0,0);
        this.recs.add(this.wall10);
        this.wall10.setImmovable(true);
        this.wall11 = this.physics.add.image(780, 240, 'LG_out').setOrigin(0,0);
        this.recs.add(this.wall11);
        this.wall11.setImmovable(true);
        
        //Inner sides
        this.wall12 = this.physics.add.image(275, 240, 'SM_out').setOrigin(0,0);
        this.recs.add(this.wall12);
        this.wall12.setImmovable(true);
        this.wall13 = this.physics.add.image(730, 240, 'SM_out').setOrigin(0,0);
        this.recs.add(this.wall13);
        this.wall13.setImmovable(true);
        this.wall14 = this.physics.add.image(275, 420, 'SM_out').setOrigin(0,0);
        this.recs.add(this.wall14);
        this.wall14.setImmovable(true);
        this.wall15 = this.physics.add.image(730, 420, 'SM_out').setOrigin(0,0);
        this.recs.add(this.wall15);
        this.wall15.setImmovable(true);
        
        //Blip creation
        for(let i = 0; i < 11; i ++){
            
            for(let j = 0; j < 7; j++){
                let blip
                if(j == 6){
                    blip = this.physics.add.image(200 + 62*i, 210 + j*55 + 10, 'blip');
                }
                else if (!((i == 4 && j == 2) || (i == 4 && j == 3) || (i == 5 && j == 2) || 
                         (i == 5 && j == 3) || (i == 6 && j == 2) || (i == 6 && j ==3))){
                    blip = this.physics.add.image(200 + 62*i, 210 + j*55, 'blip');
                }
                let collider8 = this.physics.add.collider(this.player1, blip, null, function(){
                    blip.destroy();
                    this.sound.play('coin');
                    this.player1.score += 10;
                    this.p1Score.text = "P1: " + this.player1.score;
                }, this);
                
                let collider9 = this.physics.add.collider(this.player2, blip, null, function(){
                    blip.destroy();
                    this.sound.play('coin');
                    this.player2.score += 10;
                    this.p2Score.text = "P2: " + this.player2.score;
                }, this);
            }
            
            
        }
        

        //Player 1/2 colliders
        let collider = this.physics.add.collider(this.player1, this.player2, null, function(){
            this.player1.setVelocity(0,0);
            this.player2.setVelocity(0,0);
        }, this);
        let collider2 = this.physics.add.collider(this.player1, this.recs, null, function(){
            this.player1.setVelocity(0,0);
        }, this);
        let collider4 = this.physics.add.collider(this.player2, this.recs, null, function(){
            this.player1.setVelocity(0,0);
        }, this);
        

        //Define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyTAB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TAB);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);



    }

    update() {

        //How many frames have elapsed since the start of the scene
        this.frameCount++;

        this.p1Action = false;
        this.p2Action = false;


        //Spawn Enemies
        if(this.spawnEnemy){
            let newEnemy = new Enemy(this, 508, 171, 'enemy').setScale(.7);
            //this.enemies.add(newEnemy);
            newEnemy.setBounce(1,1);
            let enemyCollider = this.physics.add.collider(newEnemy,this.recs, null, function(){
                //newEnemy.setBounce(1,1);
            }, this);
            
           // newEnemy.body.velocity.x = velX;
            //newEnemy.body.velocity.y = velY;
            //setVelocity(velX, velY);
            this.spawnEnemy = false;
            this.time.delayedCall(3000, () => {
                this.spawnEnemy = true;
            });
        }


        //Player 1 controls
        if(keyLEFT.isDown == true){
            this.player1.setVelocity(-80,0);
            this.p1Action = true;
            if(this.player1.dir == "Right"){
                this.player1.flipX = true;
                this.player1.dir = "Left";
            }
            else if(this.player1.dir == "Up"){
                this.player1.angle = 0;
                this.player1.flipX = true;
                this.player1.dir = "Left";
            }
            else if(this.player1.dir == "Down"){
                this.player1.angle = 0;
                this.player1.flipX = true;
                this.player1.dir = "Left";
            }
            this.player1.dir = "Left";
        }
        if(keyRIGHT.isDown == true){
            this.player1.setVelocity(80,0);
            this.p1Action = true;
            if(this.player1.dir == "Left"){
                this.player1.flipX= false;
                this.player1.dir = "Right";
            }
            else if(this.player1.dir == "Up"){
                this.player1.angle = 0;
                this.player1.dir = "Right";
            }
            else if(this.player1.dir == "Down"){
                this.player1.angle = 0;
                this.player1.dir = "Right";
            }
            this.player1.dir = "Right";
           
        }
        if(keyUP.isDown == true){
            this.player1.setVelocity(0,-80);
            this.p1Action = true;
            if(this.player1.dir == "Left"){
                this.player1.flipX = false;
                this.player1.angle = -90
                this.player1.dir = "Up";
            }
            else if(this.player1.dir == "Down"){
                this.player1.angle = -90;
                this.player1.dir = "Up";
            }
            else if(this.player1.dir == "Right"){
                this.player1.angle = -90;
                this.player1.dir = "Up";
            }
            this.player1.dir = "Up";
            
        }
        if(keyDOWN.isDown == true){
            this.player1.setVelocity(0,80);
            this.p1Action = true;
            if(this.player1.dir == "Left"){
                this.player1.flipX = false;
                this.player1.angle = 90;
                this.player1.dir = "Down";
            }
            else if(this.player1.dir == "Up"){
                this.player1.angle = 90;
                this.player1.dir = "Down";
            }
            else if(this.player1.dir == "Right"){
                this.player1.angle = 90;
                this.player1.dir = "Down";
            }
            this.player1.dir = "Down";
        }

        if (this.p1Action == false){
            this.player1.setVelocity(0,0)
        }
        
        //Player 2 controls
        if(keyA.isDown == true){
            this.player2.setVelocity(-80,0);
            this.p2Action = true;
            if(this.player2.dir == "Right"){
                this.player2.flipX = true;
                this.player2.dir = "Left";
            }
            else if(this.player2.dir == "Up"){
                this.player2.angle = 0;
                this.player2.flipX = true;
                this.player2.dir = "Left";
            }
            else if(this.player2.dir == "Down"){
                this.player2.angle = 0;
                this.player2.flipX = true;
                this.player2.dir = "Left";
            }
            this.player2.dir = "Left";
        }
        if(keyD.isDown == true){
            this.player2.setVelocity(80,0);
            this.p2Action = true;
            if(this.player2.dir == "Left"){
                this.player2.flipX= false;
                this.player2.dir = "Right";
            }
            else if(this.player2.dir == "Up"){
                this.player2.angle = 0;
                this.player2.dir = "Right";
            }
            else if(this.player2.dir == "Down"){
                this.player2.angle = 0;
                this.player2.dir = "Right";
            }
            this.player2.dir = "Right";
           
        }
        if(keyW.isDown == true){
            this.player2.setVelocity(0,-80);
            this.p2Action = true;
            if(this.player2.dir == "Left"){
                this.player2.flipX = false;
                this.player2.angle = -90
                this.player2.dir = "Up";
            }
            else if(this.player2.dir == "Down"){
                this.player2.angle = -90;
                this.player2.dir = "Up";
            }
            else if(this.player2.dir == "Right"){
                this.player2.angle = -90;
                this.player2.dir = "Up";
            }
            this.player2.dir = "Up";
            
        }
        if(keyS.isDown == true){
            this.player2.setVelocity(0,80);
            this.p2Action = true;
            if(this.player2.dir == "Left"){
                this.player2.flipX = false;
                this.player2.angle = 90;
                this.player2.dir = "Down";
            }
            else if(this.player2.dir == "Up"){
                this.player2.angle = 90;
                this.player2.dir = "Down";
            }
            else if(this.player2.dir == "Right"){
                this.player2.angle = 90;
                this.player2.dir = "Down";
            }
            this.player2.dir = "Down";
        }
        if (this.p2Action == false){
            this.player2.setVelocity(0,0)
        }

        this.p1Stop = true;
        this.p2Stop = true;

        //Player 2 shoots
        if(Phaser.Input.Keyboard.JustDown(keyTAB)) {
            let p2Shot
            if(this.player2.dir == "Up"){
                p2Shot = this.physics.add.sprite(this.player2.x - 3, this.player2.y - 17, 'bullet');
                
                p2Shot.angle = 90;
                p2Shot.setVelocity(0, -100);
            }
            else if(this.player2.dir == "Right"){
                p2Shot = this.physics.add.sprite(this.player2.x + 15, this.player2.y - 3, 'bullet');
                p2Shot.setVelocity(100, 0);
            }
            else if(this.player2.dir == "Left"){
                p2Shot = this.physics.add.sprite(this.player2.x - 17, this.player2.y - 1, 'bullet');
                p2Shot.setVelocity(-100,0);
            }
            else if(this.player2.dir == "Down"){
                p2Shot = this.physics.add.sprite(this.player2.x + 5, this.player2.y + 18, 'bullet');
                p2Shot.angle = 90;
                p2Shot.setVelocity(0,100);
            }
            p2Shot.hits = 0;
            p2Shot.setBounce(1.25,1.25);
            let collider6 = this.physics.add.collider(p2Shot, this.recs, null, function(){
                if(p2Shot.hits == 0){
                    p2Shot.hits += 1;
                }
                else{
                    p2Shot.destroy();
                }
                this.sound.play('hit');
            }, this);
            let p1Hit = this.physics.add.collider(p2Shot, this.player1, null, function(){
                this.player1.x = 493;
                this.player1.y = 327;
                p2Shot.destroy();
                this.sound.play('hit');
            }, this);

        }
        
        //Player 1 shoots
        if(Phaser.Input.Keyboard.JustDown(keySPACE)) {
            let p1Shot;
            if(this.player1.dir == "Up"){
                p1Shot = this.physics.add.sprite(this.player1.x - 3, this.player1.y - 17, 'bullet');
                this.shots.add(p1Shot);
                p1Shot.angle = 90;
                p1Shot.setVelocity(0, -100);   
            }
            else if(this.player1.dir == "Right"){
                p1Shot = this.physics.add.sprite(this.player1.x + 15, this.player1.y - 3, 'bullet');
                this.shots.add(p1Shot);
                p1Shot.setVelocity(100, 0);
                
            }
            else if(this.player1.dir == "Left"){
                p1Shot = this.physics.add.sprite(this.player1.x - 17, this.player1.y - 1, 'bullet');
                this.shots.add(p1Shot);
                p1Shot.setVelocity(-100,0);

            }
            else if(this.player1.dir == "Down"){
                p1Shot = this.physics.add.sprite(this.player1.x + 5, this.player1.y + 18, 'bullet');
                this.shots.add(p1Shot);
                p1Shot.angle = 90;
                p1Shot.setVelocity(0,100);
                
            }
            p1Shot.hits = 0;
            p1Shot.setBounce(1.25,1.25);
            let collider5 = this.physics.add.collider(p1Shot, this.recs, null, function(){
                if(p1Shot.hits == 0){
                    p1Shot.hits += 1;
                }
                else{
                    p1Shot.destroy();
                }
                this.sound.play('hit');
             }, this);
             let p2Hit = this.physics.add.collider(p1Shot, this.player2, null, function(){
                this.player2.x = 495;
                this.player2.y = 376;
                p1Shot.destroy();
                this.sound.play('hit');
            }, this);
        }

        if(Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start('playScene');
        }

    }
}