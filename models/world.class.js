class World {
    ctx;
    canvas;

    char = new Character();

    water = new water();

    enemies = [
    new Fish(),
    new Fish(),
    new Fish(),
    ];

    BackgroundObjects = [
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D.png', 0, 70),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D.png', 0, 70),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D.png', 0, 70),
    ];


    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    addToWorld(object) {
        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
    };

    addObjectsToWorld(objects) {
        objects.forEach(o => {
            this.addToWorld(o);
        })
    };

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.addToWorld(this.water);
        this.addObjectsToWorld(this.BackgroundObjects);
        this.addToWorld(this.char);
        this.addObjectsToWorld(this.enemies);
        

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

};
