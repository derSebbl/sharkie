class World {

    ctx;
    canvas;
    keyboard;
    camera_x;
    level = level1;

    char = new Character();


    constructor(canvas, Kboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = Kboard;
        this.draw();
        this.setWorld();
    };


    setWorld() {
        this.char.World = this;
    };


    addToWorld(object) {
        if(object.otherDirection){
            this.ctx.save();
            this.ctx.translate(object.width, 0);
            this.ctx.scale(-1, 1);
            object.x = object.x *-1;
        }
        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
        if(object.otherDirection){
            object.x = object.x *-1;
            this.ctx.restore();
        }
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
        this.addToWorld(this.char);
        this.addObjectsToWorld(this.level.enemies);

        this.ctx.translate(-this.camera_x, 0);
        

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    };


};
