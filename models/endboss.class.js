class endboss extends movableObject {

    height = 632;
    width = 680;
    y = -170;
    x = 3500;

    World;

    isHit = false;
    isDead = false;
    firstContact = false;
    
  

    FrameX = 40;
    FrameY = 170;
    FrameWidth = 400;
    FrameHeight = 600;

    boss_sound = new Audio('audio/Boss Music.mp3');

    IMAGES_SWIM = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png',
    ];

    IMAGES_INTRODUCE = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png',
    ];

    IMAGES_ATTACK = [
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/2.png',
        'img/2.Enemy/3 Final Enemy/Attack/3.png',
        'img/2.Enemy/3 Final Enemy/Attack/4.png',
        'img/2.Enemy/3 Final Enemy/Attack/5.png',
        'img/2.Enemy/3 Final Enemy/Attack/6.png',
    ];

    IMAGES_HIT = [
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/4.png',
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',
    ];

    

    constructor() {
        super().loadImg(this.IMAGES_INTRODUCE[0]);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_INTRODUCE);
        this.loadImages(this.IMAGES_HIT);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
    }

    animate() {
        let i = 9;
        setInterval(() => {

            if(i < 8) {
                this.playAnimation(this.IMAGES_INTRODUCE);
            } 

            if(this.firstContact && i > 8 && this.isHit == false && this.isDead == false) {
                this.playAnimation(this.IMAGES_SWIM);
                this.boss_sound.play();
            }
            
            if(world.char.x > 3050 && !this.firstContact){
                i = 0;
                this.firstContact = true;
                this.boss_sound.play();
            } 

            if(this.firstContact && this.isHit == false && this.isDead == false && i > 60 && i < 66) {
                this.attackAnimation();
                i = 8;
            }

            i++;
    }, 180) 
    setInterval(() => { 

        if(this.isHit == true && this.isDead == false) {
        this.hitAnimation();
        }

        if(this.isDead == true && this.isHit == true) {
            this.deadAnimation();
            this.boss_sound.pause();
        }

    }, 180);  

};

hitAnEnemy() {
    this.isHit = true;
};


hitAnimation() {
    const delayBetweenImages = 60;
    let loadedImagesCount = 0;
    for (let i = 0; i < this.IMAGES_HIT.length; i++) {
        setTimeout(() => {
            this.loadImg(this.IMAGES_HIT[i]);
            loadedImagesCount++;
            if (loadedImagesCount === this.IMAGES_HIT.length) {
                this.isHit = false;
            }
        }, i * delayBetweenImages);
    }
};


deadAnimation() {
    const delayBetweenImages = 80;
    let loadedImagesCount = 0;
    for (let i = 0; i < this.IMAGES_DEAD.length; i++) {
        setTimeout(() => {
            this.loadImg(this.IMAGES_DEAD[i]);
            loadedImagesCount++;
            if (loadedImagesCount === this.IMAGES_DEAD.length) {
                this.isHit = false;
            }
        }, i * delayBetweenImages);
    }
};


attackAnimation() {
    const delayBetweenImages = 200;
    let loadedImagesCount = 0;
    for (let i = 0; i < this.IMAGES_ATTACK.length; i++) {
        setTimeout(() => {
            this.loadImg(this.IMAGES_ATTACK[i]);
            loadedImagesCount++;
        }, i * delayBetweenImages);
    }
};
    
}