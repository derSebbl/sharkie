class World {

    ctx;
    canvas;
    keyboard;
    camera_x;

    char = new Character();

    enemies = [
    new FishPuffer(),
    new FishPuffer(),
    new FishPuffer(),
    ];

    BackgroundObjects = [
        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', -599, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', -599, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', -599, 0),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', -599, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', -599, 0),

        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', -299, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', -299, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', -299, 0),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', -299, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', -299, 0),

        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 0, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 0, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 0, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 0, 0),

        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 299, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 299, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 299, 0),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 299, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 299, 0),

        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 299*2, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 299*2, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 299*2, 0),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 299*2, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 299*2, 0),

        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 299*3, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 299*3, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 299*3, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 299*3, 0),

        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 299*4, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 299*4, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 299*4, 0),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 299*4, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 299*4, 0),
    ];





    constructor(canvas, Kboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = Kboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.char.World = this;
    }

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

        this.addObjectsToWorld(this.BackgroundObjects);
        this.addToWorld(this.char);
        this.addObjectsToWorld(this.enemies);

        this.ctx.translate(-this.camera_x, 0);
        

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

};
