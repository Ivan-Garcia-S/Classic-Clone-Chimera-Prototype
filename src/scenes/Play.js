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

        //create players
        this.p1 = new Player(this, 415, 315, keyUP, keyDOWN, keyLEFT, keyRIGHT, 'p1');
        this.p1.scale = .5;

        this.p2 = new Player(this, 575, 315, keyW, keyS, keyA, keyD, 'p2');
        this.p2.scale = .5;

        //Groups
        this.recs = this.physics.add.group();
        this.shots = this.physics.add.group();
        this.blips = this.physics.add.group();
        this.enemies = this.physics.add.group();

        //Player Creation
        // this.player1 = this.physics.add.sprite(415, 315,'p1');
        // this.player1.setScale(.5);
        // this.player1.dir = "Right";
        // this.player1.score = 0;
        // this.player2 = this.physics.add.sprite(575, 315,'p2');
        // this.player2.setScale(.5);
        // this.player2.flipX = true;
        // this.player2.dir = "Left";
        // this.player2.score = 0;

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
                let collider8 = this.physics.add.collider(this.p1, blip, null, function(){
                    blip.destroy();
                    this.sound.play('coin');
                    this.p1.score += 10;
                    this.p1Score.text = "P1: " + this.p1.score;
                }, this);
                
                let collider9 = this.physics.add.collider(this.p2, blip, null, function(){
                    blip.destroy();
                    this.sound.play('coin');
                    this.p2.score += 10;
                    this.p2Score.text = "P2: " + this.p2.score;
                }, this);
            }
            
        }

        // Player colliders
        let collider = this.physics.add.collider(this.p1, this.p2, null, function(){
            this.p1.setVelocity(0,0);
            this.p2.setVelocity(0,0);
        }, this);
        let player_wall_collider = this.physics.add.collider(this.p1, this.recs, null, function(){
            this.p1.setVelocity(0,0);
        }, this);
        let collider4 = this.physics.add.collider(this.p2, this.recs, null, function(){
            this.p2.setVelocity(0,0);
        }, this);
        

    }

    update() {

        //update players
        this.p1.update(this);
        this.p2.update(this);

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
            let p1Collider = this.physics.add.collider(newEnemy,this.p1, null, function(){
                newEnemy.destroy();
                this.p1.x = 502;
                this.p1.y = 365;
            }, this);
            let p2Collider = this.physics.add.collider(newEnemy,this.p2, null, function(){
                newEnemy.destroy();
                this.p2.x = 502;
                this.p2.y = 365;
            }, this);
            
            this.spawnEnemy = false;
            this.time.delayedCall(3000, () => {
                this.spawnEnemy = true;
            });
        }

        if(Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start('playScene');
        }

    }
}