class Character extends movableObject {

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

    World;

    swim_sound = new Audio('audio/Water Splash.mp3');


    constructor() {
        super().loadImg('img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_SWIM);

        this.animate();
    }



    animate() {

        setInterval(() =>{
            this.swim_sound.pause();
            if (this.World.keyboard.RIGHT && this.x < this.World.level.level_end_x){
                this.x += this.speed;
                this.otherDirection = false;
                this.swim_sound.play();
            };


            if (this.World.keyboard.LEFT && this.x > -100){
                this.x -= this.speed;
                this.otherDirection = true;
                this.swim_sound.play();
            };


            if (this.World.keyboard.UP){
                this.swim_sound.play();
                if(this.y == -44){return this.World.camera_x = -this.x;}
                else{
                this.y -= this.speed;
            }};


            if (this.World.keyboard.DOWN){
                this.swim_sound.play();
                if(this.y == 73){return this.World.camera_x = -this.x;}
                else{
                this.y += this.speed;
            }};

            this.World.camera_x = -this.x;
        }, 1000 / 60);

       
        setInterval(() => {

        if (this.World.keyboard.RIGHT || this.World.keyboard.LEFT) {

        let i = this.currentImg % this.IMAGES_SWIM.length;
        let path = this.IMAGES_SWIM[i];
        this.img = this.imageCache[path];
        this.currentImg++;
        }
    }, 120)
    };
}