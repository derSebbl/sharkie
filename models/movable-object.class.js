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
        console.log('move right')
    };



    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000/60);
    };
}