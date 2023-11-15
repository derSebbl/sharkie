class Character extends movableObject {

    FrameX = 53;
    FrameY = 120;
    FrameWidth = 150;
    FrameHeight = 65;

    bubbleBuild = false;
    poisonBuild = false;
    slapping = false;
    sharkieIsDead = false;
    
    World;

    swim_sound = new Audio('audio/Water Splash.mp3');
    world_sound = new Audio('audio/Gamesound.mp3');
    bubble_sound = new Audio('audio/Bubble.mp3');
    slap_sound = new Audio('audio/Finslap.mp3');
    electric_sound = new Audio('audio/Electric.mp3');
    hitByBoss_sound = new Audio('audio/hit by boss.mp3');
    poisoned_sound = new Audio('audio/hit by poison.mp3');
    buy_sound = new Audio('audio/Buy Flask.mp3');
    SharkieDie_sound = new Audio('audio/Sharkie Die.mp3');

    y = 10;
    x = 0;
    a = 0;

    speed = 1.5;


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
        this.moveAndIdleAnimation();
        this.AttackAnimation();
        this.getHitAnimation();
        this.speed = 3;
    }


    animate() {
        setStoppableInterval(() =>{
            this.swim_sound.pause();
            this.playWorldSound();

            if (this.World.keyboard.RIGHT && this.x < this.World.level.level_end_x && this.World.dead == false){
                this.moveRight();
                this.playSwimSound();
            }

            if (this.World.keyboard.LEFT && this.x > -100 && this.World.dead == false){
                this.moveLeft();
                this.playSwimSound();
            }

            if (this.World.keyboard.UP && this.World.dead == false){
                this.playSwimSound();
                if(this.y === -113){this.World.camera_x = -this.x;}
                else{
                this.moveUp();
            }}

            if (this.World.keyboard.DOWN && this.World.dead == false){
                this.playSwimSound();
                if(this.y === 277){this.World.camera_x = -this.x;}
                else{
                this.moveDown();
            }}

            if(this.x > 3050){
                this.world_sound.pause();
            }
            this.World.camera_x = -this.x;
        }, 1000 / 60);
    };

    moveAndIdleAnimation() {
        setStoppableInterval(() => {

        if (this.World.keyboard.RIGHT || this.World.keyboard.LEFT || this.World.keyboard.UP || this.World.keyboard.DOWN) {
            this.playAnimation(this.IMAGES_SWIM);
        } 

        else if(this.a < 70 && this.bubbleBuild == false && this.poisonBuild == false && this.slapping == false) {
            this.playAnimation(this.IMAGES_IDLE);
        } 

        else if(this.a > 70){
            this.playAnimation(this.IMAGES_IDLE_LONG);
        }
        this.a++;
    }, 120);
};


AttackAnimation() {
    setStoppableInterval(() => {
        if (this.World.keyboard.SPACE) {
            this.shootBubble();
        }

        else if (this.World.keyboard.F && this.World.poison >= 1) {
            this.shootPoisonBubble();
        }

        else if (this.World.keyboard.D) {
            this.slapFin();
        }

        else if(this.World.keyboard.R && this.World.gold >= 4 && this.World.poison < 8){
            this.buyPosion();
        }
    }, 120);
};


    getHitAnimation() {
        setStoppableInterval(() => {
        if (this.isHurt() && this.World.hitBy instanceof FishPuffer) {
            this.hitByPufferFish();
        }

        else if (this.isHurt() && this.World.hitBy instanceof endboss) {
            this.hitByEndboss();
        }

        else if(this.isHurt() && this.World.hitBy instanceof jellyFish) {
            this.hitByJellyFish();
        }

        else if (this.isDead() && this.World.dead == false) { 
            this.sharkieDead();
        }

        else if(this.World.dead === true){
            this.y -= 15;
        }

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
        this.a = 0;
        if (this.isHurt() && this.World.hitBy instanceof FishPuffer){
        this.poisoned_sound.pause();
        this.playAnimation(this.IMAGES_HIT_PUFFER);
        if(Muted == false){
        this.poisoned_sound.play();
        }
    }
    this.a = 0;
    };

    hitByJellyFish() {
        this.electric_sound.pause();
        this.playAnimation(this.IMAGES_HIT_JELLY);
        if(Muted == false){
        this.electric_sound.play();
        }
        this.a = 0;
    };

    hitByEndboss() {
        this.hitByBoss_sound.pause();
        this.playAnimation(this.IMAGES_HIT_BOSS);
        if(Muted == false){
        this.hitByBoss_sound.play();
        }
        this.a = 0;
    };

    sharkieDead() {
        this.deadAnimation();
        this.World.dead = true;
        if(Muted == false){
        this.SharkieDie_sound.play();
        }
        this.world_sound.pause();  
        this.sharkieIsDead = true;
    };

    shootPoisonBubble(){
        this.World.poisonBuild = true;
        this.World.poison -= 1;
        this.World.poisonbar.setPercantage(this.World.poison)
        this.poisonShoot();
        if(Muted == false){
        this.bubble_sound.play();
        }
        this.a = 0;
    };

    buyPosion(){
        if(Muted == false){
        this.buy_sound.play();
        }
        this.World.gold -= 4;
        this.World.poison += 1;
        this.World.poisonbar.setPercantage(this.World.poison);
        this.World.coinbar.setPercantage(this.World.gold);
    };

    shootBubble(){
        this.blubShoot();
        if(Muted == false){
        this.bubble_sound.play();
        }
        this.a = 0;
    };

    slapFin(){
        this.finSlap();
        if(Muted == false){
        this.slap_sound.play();
        }
        this.World.slap = true;
        this.FrameWidth = 200;
        this.a = 0;
    };

    playSwimSound(){
        if(Muted == false){
        this.swim_sound.play();
        }
    };

    playWorldSound(){
        if(this.World.dead === false && Muted == false){
        this.world_sound.volume = 0.3;
        this.world_sound.play();
        }
    };

}