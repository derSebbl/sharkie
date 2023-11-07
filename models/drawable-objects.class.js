class drawableObjects {
    x = 0;
    y = 0;
    height = 250;
    width = 273;
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


    drawFrame(ctx){
        if (this instanceof Character || this instanceof FishPuffer || this instanceof endboss || this instanceof jellyFish) {
        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.strokeStyle = "red";
        ctx.rect(this.x + this.FrameX, this.y + this.FrameY,this.FrameWidth, this.FrameHeight);
        ctx.stroke();
        }
    };
}