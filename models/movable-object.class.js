class movableObject {
    x = 40;
    y = 0;
    img;
    height = 80;
    width = 80;

    loadImg(path){
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('move right')
    };



    moveLeft() {

        
    };
}