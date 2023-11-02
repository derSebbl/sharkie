class World {

char = new Character();

enemies =   [
new Fish(),
new Fish(),
new Fish(),
            ];

ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.draw();
    }




    draw() {
        this.ctx.drawImage(this.char.img, this.char.x, this.char.y, this.char.width, this.char.height);
    }
}