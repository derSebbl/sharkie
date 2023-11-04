class BackgroundObject extends movableObject {

    width = 300;
    height = 150;

    constructor(imagePath, x, y) {
        super().loadImg(imagePath);
        this.x = x;
        this.y = y;

    }
}