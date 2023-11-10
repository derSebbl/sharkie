class movableObject extends drawableObjects {

    speed = 3;
    otherDirection = false;
    energy = 100;
    lastHit = 0;



    isColliding(obj) {
        return  this.x + this.FrameX < obj.x + obj.FrameWidth &&
                this.x + this.FrameX + this.FrameWidth > obj.x + obj.FrameX &&
                this.y + this.FrameY < obj.y + obj.FrameHeight &&
                this.y + this.FrameY + this.FrameHeight > obj.y + obj.FrameY;
    };


    hit() {
        this.energy -= 5;
        if (this.energy < 0){
            this.energy = 0;
        } 
        else {
            this.lastHit = new Date().getTime();
        }
    };


    bossHit() {
        this.energy -= 20;
        if (this.energy < 0){
            this.energy = 0;
        } 
        else {
            this.lastHit = new Date().getTime();
        }
    };



    isDead() {
        return this.energy == 0;
    };


    isHurt() {
            let timepassed = new Date().getTime() - this.lastHit;
            timepassed = timepassed / 1000;
            return timepassed < 1;
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
        let i = this.currentImg % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImg++;
    };
}