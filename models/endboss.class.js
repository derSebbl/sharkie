class endboss extends movableObject {

    height = 632;
    width = 680;
    y = -170;
    x = 3500;
    bossHit = 0;    

    World;

    isHit = false;
    isDead = false;
    firstContact = false;
    attacking = false;
    
  

    FrameX = 40;
    FrameY = 170;
    FrameWidth = 400;
    FrameHeight = 600;

    boss_music = new Audio('audio/Boss Music.mp3');
    boss_hit = new Audio('audio/BossHit.mp3');
    boss_die = new Audio('audio/Boss Die.mp3');


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

            if(this.firstContact && i > 8 && this.isHit == false && this.attacking == false && this.bossHit < 3) {
                this.playAnimation(this.IMAGES_SWIM);
                if(Muted == false){
                this.boss_music.play();
                }
            }
            
            if(world.char.x > 3050 && !this.firstContact){
                i = 0;
                this.firstContact = true;
                if(Muted == false){
                this.boss_music.play();
                }
            } 

            if(this.firstContact && i > 45 && this.bossHit < 3) {
                this.attackAnimation();
                i = 8;
            }

            console.log(Character.sharkieIsDead);

            i++;
    }, 180) 
    setInterval(() => { 

        if(this.isHit == true && this.bossHit < 3) {
        this.hitAnimation();
        }

        if(this.bossHit == 3) {
            this.attacking = true;
            this.bossHit = 4;
            World.BossDead = true;
            this.deadAnimation();
        }

    }, 180);  

};

hitAnEnemy() {
    this.isHit = true;
};


hitAnimation() {
    if(Muted == false){
    this.boss_hit.play();
    }
    const delayBetweenImages = 60;
    let loadedImagesCount = 0;
    for (let i = 0; i < this.IMAGES_HIT.length; i++) {
        setTimeout(() => {
            this.loadImg(this.IMAGES_HIT[i]);
            loadedImagesCount++;
            if (loadedImagesCount === this.IMAGES_HIT.length) {
                this.isHit = false;
                this.boss_hit.pause();
            }
        }, i * delayBetweenImages);
    }
};


deadAnimation() {
    const delayBetweenImages = 80;
    let loadedImagesCount = 0;
    this.boss_music.pause();

    if(Muted == false){
    this.boss_die.play();
    }

    for (let i = 0; i < this.IMAGES_DEAD.length; i++) {
        setTimeout(() => {
            this.loadImg(this.IMAGES_DEAD[i]);
            loadedImagesCount++;
            if (loadedImagesCount === this.IMAGES_DEAD.length) {
                this.isHit = false;
                clearAllIntervals();
            }
        }, i * delayBetweenImages);
    }
};


attackAnimation() {
    const delayBetweenImages = 100;
    let loadedImagesCount = 0;

    this.attacking = true;

    for (let i = 0; i < this.IMAGES_ATTACK.length; i++) {
        setTimeout(() => {
            this.loadImg(this.IMAGES_ATTACK[i]);
            loadedImagesCount++;
            if (loadedImagesCount === this.IMAGES_ATTACK.length) {
                this.attacking = false;
            }
        }, i * delayBetweenImages);
    }
};
}