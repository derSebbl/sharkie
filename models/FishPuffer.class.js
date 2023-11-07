class FishPuffer extends movableObject {
    height = 60;
    width = 60;

    FrameX = 0;
    FrameY = 0;
    FrameWidth = 50;
    FrameHeight = 40;

    IMAGES_SWIM = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png',
    ];

    constructor() {
        super().loadImg('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
        this.loadImages(this.IMAGES_SWIM);

        this.animate();

        this.x = 300 + Math.random() * 3000;
        this.y = 0 + Math.random() * 350;
        this.speed = 1 + Math.random() * 0.25; 
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIM);
    }, 280)
    setInterval(() => {
        this.moveLeft();
        this.otherDirection = false;
    }, 1000/60);
};


}