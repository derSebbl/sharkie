class drawableObjects {
    x = 0;
    y = 0;
    height = 100;
    width = 123;
    img;
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


    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };

}