class movableObject {
    x = 40;
    y = 0;
    img;
    height = 100;
    width = 100;
    imageCache = {};
    currentImg = 0;

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

        
    };
}