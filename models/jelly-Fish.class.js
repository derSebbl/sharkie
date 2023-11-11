class jellyFish extends movableObject {
    height = 80;
    width = 80;

    FrameX = 5;
    FrameY = 5;
    FrameWidth = 70;
    FrameHeight = 70;

    isHit = false;

    hit_sound = new Audio('audio/Jellyhit.mp3');

    IMAGES_SWIM = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
    ];

    IMAGES_ELEKTRO = [
        'img/2.Enemy/2 Jelly fish/S｣per dangerous/Green 1.png',
        'img/2.Enemy/2 Jelly fish/S｣per dangerous/Green 2.png',
        'img/2.Enemy/2 Jelly fish/S｣per dangerous/Green 3.png',
        ];

    IMAGES_DEAD = [
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png',
    ];


    constructor() {
        super().loadImg('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_ELEKTRO);
        this.loadImages(this.IMAGES_DEAD);


        this.animate();

        this.x = 300 + Math.random() * 2800;
        this.y = 0 + Math.random() * 350;
        this.speed = 0.15 + Math.random() * 0.25; 
    }



    animate() {
        let e = 0;
        setInterval(() => {
            if(e > 25 && e < 40) {
                this.playAnimation(this.IMAGES_ELEKTRO);
            }

            else if(e > 41) {
               e = 0;
            }

            else {
            this.playAnimation(this.IMAGES_SWIM);
            }

            e++
        }, 200);

        setInterval(() => { 

            if(this.isHit == true) {
            this.playAnimation(this.IMAGES_DEAD);
            e = 100;
            }

        }, 100);

    };

    hitAnEnemy() {
        this.energy -= 100;
        this.isHit = true;
        this.hit_sound.play();
    };
}