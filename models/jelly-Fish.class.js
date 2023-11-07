class jellyFish extends movableObject {
    height = 32;
    width = 26;

    FrameX = 0;
    FrameY = 0;
    FrameWidth = 26;
    FrameHeight = 28;

    IMAGES_SWIM = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
    ];

    constructor() {
        super().loadImg('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
        this.loadImages(this.IMAGES_SWIM);

        this.animate();

        this.x = 300 + Math.random() * 1000;
        this.y = 0 + Math.random() * 100;
        this.speed = 0.15 + Math.random() * 0.25; 
    }



    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIM);
    }, 280);
};

}