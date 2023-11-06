class movableObject {
    x = 0;
    y = 0;
    img;
    height = 100;
    width = 123;
    imageCache = {};
    currentImg = 0;
    speed = 0.15;
    otherDirection = false;


    loadImg(path){
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };

    drawFrame(ctx){
        if (this instanceof Character || this instanceof FishPuffer || this instanceof endboss) {
        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.strokeStyle = "red";
        ctx.rect(this.x + this.FrameX, this.y + this.FrameY,this.FrameWidth, this.FrameHeight)
        //ctx.rect(this.x, this.y, this.width, this.height)
        ctx.stroke()
        }
    };


    isColliding(obj) {
        return  this.x + this.FrameX < obj.x + obj.FrameWidth &&
                this.x + this.FrameX + this.FrameWidth > obj.x + obj.FrameX &&
                this.y + this.FrameY < obj.y + obj.FrameHeight &&
                this.y + this.FrameY + this.FrameHeight > obj.y + obj.FrameY;
    };


    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    };


    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    };


    moveUp() {
        this.y -= this.speed;
    };


    moveDown() {
        this.y += this.speed;
    };


    playAnimation(images) {
        let i = this.currentImg % this.IMAGES_SWIM.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImg++;
    };
}