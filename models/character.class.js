class Character extends movableObject {

    FrameX = 53;
    FrameY = 120;
    FrameWidth = 170;
    FrameHeight = 65;
    
    World;

    swim_sound = new Audio('audio/Water Splash.mp3');

    y = 10;

    speed = 1.5;

    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png',
    ];

    IMAGES_SWIM = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png'
    ];

    IMAGES_DEAD = [
        'img/1.Sharkie/6.dead/1.Poisoned/1.png',
        'img/1.Sharkie/6.dead/1.Poisoned/2.png',
        'img/1.Sharkie/6.dead/1.Poisoned/3.png',
        'img/1.Sharkie/6.dead/1.Poisoned/4.png',
        'img/1.Sharkie/6.dead/1.Poisoned/5.png',
        'img/1.Sharkie/6.dead/1.Poisoned/6.png',
        'img/1.Sharkie/6.dead/1.Poisoned/7.png',
        'img/1.Sharkie/6.dead/1.Poisoned/8.png',
        'img/1.Sharkie/6.dead/1.Poisoned/9.png',
        'img/1.Sharkie/6.dead/1.Poisoned/10.png',
        'img/1.Sharkie/6.dead/1.Poisoned/11.png',
        'img/1.Sharkie/6.dead/1.Poisoned/12.png',
    ];

    IMAGES_HIT_PUFFER = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/5.png',
    ];

    IMAGES_HIT_JELLY = [
        'img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/3.png',
    ];

    IMAGES_BUILD_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png',
    ];

    IMAGES_FIN_SLAP = [
        'img/1.Sharkie/4.Attack/Fin slap/1.png',
        'img/1.Sharkie/4.Attack/Fin slap/4.png',
        'img/1.Sharkie/4.Attack/Fin slap/5.png',
        'img/1.Sharkie/4.Attack/Fin slap/6.png',
        'img/1.Sharkie/4.Attack/Fin slap/7.png',
        'img/1.Sharkie/4.Attack/Fin slap/8.png',
    ];



    constructor() {
        super().loadImg('img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HIT_PUFFER);
        this.loadImages(this.IMAGES_HIT_JELLY);
        this.loadImages(this.IMAGES_BUILD_BUBBLE);
        this.loadImages(this.IMAGES_FIN_SLAP);

        this.animate();
        this.speed = 3;
    }


    animate() {

        setInterval(() =>{
            this.swim_sound.pause();

            if (this.World.keyboard.RIGHT && this.x < this.World.level.level_end_x){
                this.moveRight();
                this.swim_sound.play();
            };


            if (this.World.keyboard.LEFT && this.x > -100){
                this.moveLeft();
                this.swim_sound.play();
            };


            if (this.World.keyboard.UP){
                this.swim_sound.play();
                if(this.y === -113){return this.World.camera_x = -this.x;}
                else{
                this.moveUp();
            }};


            if (this.World.keyboard.DOWN){
                this.swim_sound.play();
                if(this.y === 277){return this.World.camera_x = -this.x;}
                else{
                this.moveDown();
            }};

            this.World.camera_x = -this.x;
        }, 1000 / 60);

       
        setInterval(() => {

        if (this.isHurt() && this.World.hitBy instanceof FishPuffer) {
                this.hitByPufferFish();
        }

        else if(this.isHurt() && this.World.hitBy instanceof jellyFish) {
                this.hitByJellyFish();
        }

        else if (this.isDead() && this.World.dead == false) { 
        this.deadAnimation();
        this.World.dead = true;
        }

        else if(this.World.dead === true){
            this.y -= 15;
        }

        else if (this.World.keyboard.RIGHT || this.World.keyboard.LEFT || this.World.keyboard.UP || this.World.keyboard.DOWN) {
            this.playAnimation(this.IMAGES_SWIM);
        } 

        else if (this.World.keyboard.SPACE) {
            this.World.bubbleBuild = true;
            this.blubShoot();
        }

        else if (this.World.keyboard.D) {
            this.finSlap();
            this.World.slap = true;
        }
        else if(this.World.keyboard.RIGHT || this.World.keyboard.LEFT || this.World.keyboard.UP || this.World.keyboard.DOWN || this.World.dead === false && this.World.bubbleBuild === false && this.World.slap === false) {
            this.playAnimation(this.IMAGES_IDLE);
        } 

    }, 120);
};

    blubShoot() {
        const delayBetweenImages = 80;
        let loadedImagesCount = 1;
        for (let i = 1; i < this.IMAGES_BUILD_BUBBLE.length; i++) {
            setTimeout(() => {
                this.loadImg(this.IMAGES_BUILD_BUBBLE[i]);
                loadedImagesCount++;
                if (loadedImagesCount === this.IMAGES_BUILD_BUBBLE.length) {
                    this.World.bubbleShot = true;
                    this.World.bubbleBuild = false;
                }
            }, i * delayBetweenImages);
        }
    };


    idleAnimation() {
        const delayBetweenImages = 80;
        let loadedImagesCount = 0;
    
        for (let i = 1; i < this.IMAGES_IDLE.length; i++) {
            setTimeout(() => {
                this.loadImg(this.IMAGES_IDLE[i]);
                loadedImagesCount++;
            }, i * delayBetweenImages);
        }
    };


    finSlap(){
        const delayBetweenImages = 80;
        let loadedImagesCount = 0;
        for (let i = 1; i < this.IMAGES_FIN_SLAP.length; i++) {
            setTimeout(() => {
                this.loadImg(this.IMAGES_FIN_SLAP[i]);
                loadedImagesCount++;
                if (loadedImagesCount === this.IMAGES_FIN_SLAP.length - 1) {
                    this.loadImg(`img/1.Sharkie/3.Swim/1.png`);
                    this.World.slap = false;
                }
            }, i * delayBetweenImages);
        }
    };


    deadAnimation() {
        const delayBetweenImages = 80;
        let loadedImagesCount = 0;
    
        for (let i = 1; i < this.IMAGES_DEAD.length; i++) {
            setTimeout(() => {
                this.loadImg(`img/1.Sharkie/6.dead/1.Poisoned/${i}.png`);
                loadedImagesCount++;
            }, i * delayBetweenImages);
        }
    };


    hitByPufferFish(){
        return this.playAnimation(this.IMAGES_HIT_PUFFER);
    };


    hitByJellyFish() {
        return this.playAnimation(this.IMAGES_HIT_JELLY);
    };
}