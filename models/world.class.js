class World {

    ctx;
    canvas;
    keyboard;
    camera_x;
    level = level1;
    healthbar = new healthBar;
    bubbles = [];
    bubbleShot = false;
    bubbleBuild = false;
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


    run(){
        setInterval(() => {
        this.checkCollisionsPuffer();
        this.checkCollisionsJelly();
        this.checkCollisionsBoss();
        this.checkCollisionsCoin();
        this.checkCollisionsPoison();
        this.checkCollisionsSlap();
        //this.checkCollisionsBubble();
        this.shootBubbles();
    }, 200);
    };


    checkCollisionsPuffer() {
            this.level.puffer.forEach((enemy) =>{
              if( this.char.isColliding(enemy) && !this.slap){
               this.char.hit();
               this.healthbar.setPercantage(this.char.energy);
               this.hitBy = enemy;
               console.log(this.char.energy, this.hitBy);
              };
            });
    };


    checkCollisionsJelly() {
        this.level.jelly.forEach((enemy) =>{
            if( this.char.isColliding(enemy) && !this.slap){
             this.char.hit();
             this.healthbar.setPercantage(this.char.energy);
             this.hitBy = enemy;
             console.log(this.char.energy, this.hitBy);
            };
          });
    };


    checkCollisionsBoss() {
        this.level.boss.forEach((enemy) =>{
            if( this.char.isColliding(enemy) && !this.slap){
             this.char.hit();
             this.healthbar.setPercantage(this.char.energy);
             this.hitBy = enemy;
             console.log(this.char.energy, this.hitBy);
            };
          });
    };


    checkCollisionsSlap() {
        this.level.puffer.forEach((puffer) =>{
          if( this.char.isColliding(puffer) && this.slap){
           puffer.y -= 800;
          };
        });
};


    checkCollisionsCoin() {           
        this.level.coin.forEach((gold) =>{
        if( this.char.isColliding(gold)) {
            this.gold ++;
            gold.y -= 800;
         console.log(this.gold);
        };
      });
};


checkCollisionsPoison() {           
    this.level.poison.forEach((flask) =>{
    if( this.char.isColliding(flask)) {
        this.poison ++;
        flask.y -= 800;
     console.log(this.poison);
    };
  });
};


/*checkCollisionsBubble() {
    this.level.enemies.forEach((Jelly) =>{
        if( bubble.isColliding(Jelly)) {
         console.log('buublehit');
        };
      });
}; */





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
        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToWorld(this.bubbles);
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
