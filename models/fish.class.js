class Fish extends movableObject {

    height = 40;
    width = 40;

    constructor() {
        super().loadImg('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');

        this.x = 30 + Math.random() * 250;
    }

}