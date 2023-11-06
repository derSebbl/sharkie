class Character extends movableObject {

    FrameX = 23;
    FrameY = 45;
    FrameWidth = 80;
    FrameHeight = 30;
    
    World;

    swim_sound = new Audio('audio/Water Splash.mp3');

    y = 10;

    speed = 1.5;

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



    constructor() {
        super().loadImg('img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HIT_PUFFER);

        this.animate();
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
                if(this.y == -44){return this.World.camera_x = -this.x;}
                else{
                this.moveUp();
            }};


            if (this.World.keyboard.DOWN){
                this.swim_sound.play();
                if(this.y == 73){return this.World.camera_x = -this.x;}
                else{
                this.moveDown();
            }};

            this.World.camera_x = -this.x;
        }, 1000 / 60);

       
        setInterval(() => {
        if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HIT_PUFFER);
        }
        else if (this.isDead()) { 
        this.playAnimation(this.IMAGES_DEAD);
        }
        else if (this.World.keyboard.RIGHT || this.World.keyboard.LEFT || this.World.keyboard.UP || this.World.keyboard.DOWN) {
            this.playAnimation(this.IMAGES_SWIM);
        }
    }, 120)
    };





}