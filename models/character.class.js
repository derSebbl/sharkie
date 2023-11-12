class Character extends movableObject {

    FrameX = 53;
    FrameY = 120;
    FrameWidth = 150;
    FrameHeight = 65;

    bubbleBuild = false;
    poisonBuild = false;
    slapping = false;
    
    World;

    swim_sound = new Audio('audio/Water Splash.mp3');
    world_sound = new Audio('audio/Gamesound.mp3');
    bubble_sound = new Audio('audio/Bubble.mp3');
    slap_sound = new Audio('audio/Finslap.mp3');
    electric_sound = new Audio('audio/Electric.mp3');

    y = 10;
    x = 0;

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

    IMAGES_IDLE_LONG = [
        'img/1.Sharkie/2.Long_IDLE/i1.png',
        'img/1.Sharkie/2.Long_IDLE/i2.png',
        'img/1.Sharkie/2.Long_IDLE/i3.png',
        'img/1.Sharkie/2.Long_IDLE/i4.png',
        'img/1.Sharkie/2.Long_IDLE/i5.png',
        'img/1.Sharkie/2.Long_IDLE/i6.png',
        'img/1.Sharkie/2.Long_IDLE/i7.png',
        'img/1.Sharkie/2.Long_IDLE/i8.png',
        'img/1.Sharkie/2.Long_IDLE/i9.png',
        'img/1.Sharkie/2.Long_IDLE/i10.png',
        'img/1.Sharkie/2.Long_IDLE/i11.png',
        'img/1.Sharkie/2.Long_IDLE/i12.png',
        'img/1.Sharkie/2.Long_IDLE/i13.png',
        'img/1.Sharkie/2.Long_IDLE/i14.png',
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

    IMAGES_HIT_BOSS = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
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

    IMAGES_BUILD_POISON_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png',
    ];



    constructor() {
        super().loadImg('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_IDLE_LONG);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HIT_PUFFER);
        this.loadImages(this.IMAGES_HIT_JELLY);
        this.loadImages(this.IMAGES_HIT_BOSS);
        this.loadImages(this.IMAGES_BUILD_BUBBLE);
        this.loadImages(this.IMAGES_BUILD_POISON_BUBBLE);
        this.loadImages(this.IMAGES_FIN_SLAP);

        this.animate();
        this.speed = 3;
    }


    animate() {
        let a = 0;
        setInterval(() =>{
            this.swim_sound.pause();
            this.world_sound.volume = 0.4;
            this.world_sound.play();

            if (this.World.keyboard.RIGHT && this.x < this.World.level.level_end_x){
                a = 0;
                this.moveRight();
                this.swim_sound.play();
            };


            if (this.World.keyboard.LEFT && this.x > -100){
                a = 0;
                this.moveLeft();
                this.swim_sound.play();
            };


            if (this.World.keyboard.UP){
                a = 0;
                this.swim_sound.play();
                if(this.y === -113){return this.World.camera_x = -this.x;}
                else{
                this.moveUp();
            }};


            if (this.World.keyboard.DOWN){
                a = 0;
                this.swim_sound.play();
                if(this.y === 277){return this.World.camera_x = -this.x;}
                else{
                this.moveDown();
            }};

            if(this.World.keyboard.R && this.World.gold >= 4 && this.World.poison < 8){
                this.World.gold -= 4;
                this.World.poison += 1;
                this.World.poisonbar.setPercantage(this.World.poison);
                this.World.coinbar.setPercantage(this.World.gold);
            };

            if(this.x > 3050){
                this.world_sound.pause();
            }


            this.World.camera_x = -this.x;
        }, 1000 / 60);

       
        setInterval(() => {

        if (this.isHurt() && this.World.hitBy instanceof FishPuffer) {
            a = 0;
            this.hitByPufferFish();
        }

        else if (this.isHurt() && this.World.hitBy instanceof endboss) {
            a = 0;
            this.hitByEndboss();
        }

        else if(this.isHurt() && this.World.hitBy instanceof jellyFish) {
            this.electric_sound.pause();
            a = 0;
            this.hitByJellyFish();
            this.electric_sound.play();
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
            this.blubShoot();
            this.bubble_sound.play();
            a = 0;
        }

        else if (this.World.keyboard.F && this.World.poison >= 1) {
            this.World.poisonBuild = true;
            this.World.poison -= 1;
            this.World.poisonbar.setPercantage(this.World.poison)
            this.poisonShoot();
            this.bubble_sound.play();
            a = 0;
        }

        else if (this.World.keyboard.D) {
            this.finSlap();
            this.slap_sound.play();
            this.World.slap = true;
            this.FrameWidth = 200;
            a = 0;
        }

        else if(a < 70 && this.bubbleBuild == false && this.poisonBuild == false && this.slapping == false) {
            this.playAnimation(this.IMAGES_IDLE);
        } 

        else if(a > 70){
            this.playAnimation(this.IMAGES_IDLE_LONG);
        }

        a++;
    }, 120);
};





    blubShoot() {
        if(this.bubbleBuild == true) {
            return
        }

        this.bubbleBuild = true;
        this.bubble_sound.pause();
    
        const delayBetweenImages = 40;
        let loadedImagesCount = 0;
        for (let i = 0; i < this.IMAGES_BUILD_BUBBLE.length; i++) {
            setTimeout(() => {
                this.loadImg(this.IMAGES_BUILD_BUBBLE[i]);
                loadedImagesCount++;
                if (loadedImagesCount === this.IMAGES_BUILD_BUBBLE.length) {
                    this.bubbleBuild = false;
                    this.World.bubbleShot = true;
                }
            }, i * delayBetweenImages);
        }
    };


    poisonShoot() { 
        if(this.poisonBuild == true) {
            return
        }

        this.poisonBuild = true;
        this.bubble_sound.pause();

        const delayBetweenImages = 40;
        let loadedImagesCount = 0;
        for (let i = 0; i < this.IMAGES_BUILD_POISON_BUBBLE.length; i++) {
            setTimeout(() => {
                this.loadImg(this.IMAGES_BUILD_POISON_BUBBLE[i]);
                loadedImagesCount++;
                if (loadedImagesCount === this.IMAGES_BUILD_POISON_BUBBLE.length) {
                    this.World.poisonShot = true;
                    this.poisonBuild = false;
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
        if(this.slapping == true) {
            return
        }
        this.slapping = true;
        this.slap_sound.pause();

        const delayBetweenImages = 80;
        let loadedImagesCount = 0;
        for (let i = 1; i < this.IMAGES_FIN_SLAP.length; i++) {
            setTimeout(() => {
                this.loadImg(this.IMAGES_FIN_SLAP[i]);
                loadedImagesCount++;
                if (loadedImagesCount === this.IMAGES_FIN_SLAP.length - 1) {
                    this.loadImg(`img/1.Sharkie/3.Swim/1.png`);
                    this.World.slap = false;
                    this.FrameWidth = 150;
                    this.slapping = false;
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

    
    hitByEndboss() {
        return this.playAnimation(this.IMAGES_HIT_BOSS);
    };

}