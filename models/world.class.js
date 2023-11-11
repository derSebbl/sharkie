class World {

    ctx;
    canvas;
    keyboard;
    camera_x;
    level = level1;
    healthbar = new healthBar;
    coinbar = new coinBar;
    poisonbar = new poisonBar;
    endscreen = new endscreen;
    bubbles = [];
    poisonBubbles = [];
    bubbleShot = false;
    poisonShot = false;
    bubbleBuild = false;
    poisonBuild = false;
    bossHit = 0;
    dead = false;
    slap = false;
    gold = 0;
    poison = 0;
    hitBy;
    

    

    char = new Character();

    constructor(canvas, Kboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = Kboard;
        this.draw();
        this.setWorld();
        this.run();
        console.log(this.level.enemies);
    };



    run(){
        setInterval(() => {
        this.checkCollisionsPuffer();
        this.checkCollisionsJelly();
        this.checkCollisionsBoss();
        this.checkCollisionsCoin();
        this.checkCollisionsPoison();
        this.checkCollisionsSlap();
        this.checkCollisionsBubble();
        this.checkBubbleHitBoss();
        this.shootBubbles();
        this. shootPoison();
    }, 200);
    };

    setWorld() {
        this.char.World = this;
    };

    shootBubbles() {
        if (this.bubbleShot == true){
            let blub = new bubble(this.char.x + 200, this.char.y +150);
            this.bubbles.push(blub);
            this.bubbleShot = false;
        }
    }; 

    shootPoison() {
        if (this.poisonShot == true){
            let blub = new poisonBubble(this.char.x + 200, this.char.y +150);
            this.poisonBubbles.push(blub);
            this.poisonShot = false;
        }
    }; 




    checkCollisionsPuffer() {
            this.level.puffer.forEach((enemy) =>{
              if( this.char.isColliding(enemy) && !this.slap && enemy.isHit == false){
               this.char.hit();
               this.healthbar.setPercantage(this.char.energy);
               this.hitBy = enemy;
              };
            });
    };


    checkCollisionsJelly() {
        this.level.jelly.forEach((enemy) =>{
            if( this.char.isColliding(enemy) && !this.slap && enemy.isHit == false){
             this.char.hit();
             this.healthbar.setPercantage(this.char.energy);
             this.hitBy = enemy;
            };
          });
    };


    checkCollisionsBoss() {
        this.level.boss.forEach((enemy) =>{
            if( this.char.isColliding(enemy) && !this.slap){
             this.char.bossHit();
             this.healthbar.setPercantage(this.char.energy);
             this.hitBy = enemy;
            };
          });
    };


    checkCollisionsSlap() {
        this.level.puffer.forEach((puffer) =>{
          if( this.char.isColliding(puffer) && this.slap){
           puffer.hitAnEnemy();
          };
        });
};


    checkCollisionsCoin() {           
        this.level.coin.forEach((gold) =>{
        if( this.char.isColliding(gold)) {
            this.gold ++;
            gold.y = -800;
            this.coinbar.setPercantage(this.gold)
        };
      });
};


checkCollisionsPoison() {           
    this.level.poison.forEach((flask) =>{
    if( this.char.isColliding(flask)) {
        this.poison ++;
        flask.y = -800;
        this.poisonbar.setPercantage(this.poison)
    };
  });
};


checkCollisionsBubble() {
    this.level.jelly.forEach((jelly) =>{
        this.bubbles.forEach((bubble) =>{
            if( bubble.isColliding(jelly) && jelly.isHit == false){
                jelly.hitAnEnemy();
                bubble.y = -800;
            };
        });
    });
};


checkBubbleHitBoss() {
    this.level.boss.forEach((enemy) =>{
        this.poisonBubbles.forEach((bubble) =>{
            if( bubble.isColliding(enemy) && this.poison > 0){
                this.bossHit ++;
                bubble.y = -800;
                enemy.hitAnEnemy();
            }
            if(this.bossHit >= 3){
                enemy.isDead = true;
            }
        });
    });
};



    addToWorld(object) {
        if(object.otherDirection){
            this.flipImage(object);
        };

        object.draw(this.ctx);

        if(object.otherDirection){
            this.flipImageBack(object);
        };

        object.drawFrame(this.ctx);

    };


    flipImage(object){
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.x = object.x *-1;
    };


    flipImageBack(object) {
        object.x = object.x *-1;
        this.ctx.restore();
    };


    addObjectsToWorld(objects) {
        objects.forEach(o => {
            this.addToWorld(o);
        })
    };


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        
        this.addObjectsToWorld(this.level.BackgroundObjects);

        this.ctx.translate(-this.camera_x, 0);
        this.addToWorld(this.healthbar);
        this.addToWorld(this.coinbar);
        this.addToWorld(this.poisonbar);
        this.addToWorld(this.endscreen);
        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToWorld(this.bubbles);
        this.addObjectsToWorld(this.poisonBubbles);
        this.addToWorld(this.char);
        this.addObjectsToWorld(this.level.puffer);
        this.addObjectsToWorld(this.level.jelly);
        this.addObjectsToWorld(this.level.boss);
        this.addObjectsToWorld(this.level.coin);
        this.addObjectsToWorld(this.level.poison);
        

        this.ctx.translate(-this.camera_x, 0);
        

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    };
};
