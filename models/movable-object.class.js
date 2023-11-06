class movableObject {
    x = 0;
    y = 0;
    img;
    height = 101;
    width = 125;
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