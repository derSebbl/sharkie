class movableObject {
    x = 40;
    y = 0;
    img;
    height = 80;
    width = 120;
    imageCache = {};
    currentImg = 0;
    speed = 0.15;

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