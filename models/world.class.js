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
    Contact = false;
    hitBy;
   

    char = new Character();


    constructor(canvas, Kboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = Kboard;
        this.draw();
        this.setWorld();
        this.run();
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
        this.checkCollisions();
        this.shootBubbles();
    }, 200);
    };


    checkCollisions() {
            this.level.enemies.forEach((enemy) =>{
              if( this.char.isColliding(enemy) ){
               this.char.hit();
               this.healthbar.setPercantage(this.char.energy);
               this.hitBy = enemy;
               console.log(this.char.energy, this.hitBy);
              };
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
        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToWorld(this.bubbles);
        this.addToWorld(this.char);
        this.addObjectsToWorld(this.level.enemies);
        

        this.ctx.translate(-this.camera_x, 0);
        

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    };


};
