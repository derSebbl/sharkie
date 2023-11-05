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


    constructor() {
        super().loadImg('img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_SWIM);

        this.animate();
    }



    animate() {

        setInterval(() =>{
            if (this.World.keyboard.RIGHT){
                this.x += this.speed;
                this.otherDirection = false;
            };


            if (this.World.keyboard.LEFT){
                this.x -= this.speed;
                this.otherDirection = true;
            };


            if (this.World.keyboard.UP){
                if(this.y == -36.5){return this.World.camera_x = -this.x;}
                else{
                this.y -= this.speed;
            }};


            if (this.World.keyboard.DOWN){
                if(this.y == 88){return this.World.camera_x = -this.x;}
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