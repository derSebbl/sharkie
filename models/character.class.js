class Character extends movableObject {

    y = 50;

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
       
        setInterval(() => {
            
        if (this.World.keyboard.RIGHT) {

        let i = this.currentImg % this.IMAGES_SWIM.length;
        let path = this.IMAGES_SWIM[i];
        this.img = this.imageCache[path];
        this.currentImg++;
        }
    }, 280)
    };



    jump() {

    }
}