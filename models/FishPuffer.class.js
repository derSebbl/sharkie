class FishPuffer extends movableObject {
    height = 60;
    width = 60;

    FrameX = 0;
    FrameY = 0;
    FrameWidth = 50;
    FrameHeight = 40;

    IMAGES_SWIM = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png',
    ];

    IMAGES_TRANSITION = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png',
        
    ];

    IMAGES_PUFFED = [
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png',
    ];

    constructor() {
        super().loadImg('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_TRANSITION);
        this.loadImages(this.IMAGES_PUFFED);

        this.animate();

        this.x = 300 + Math.random() * 4000;
        this.y = 0 + Math.random() * 350;
        this.speed = 1 + Math.random() * 0.25; 
    }

    animate() {
        let e = 0
        setInterval(() => {
            if(e > 16 && e < 20){
                this.pufferFishTransition();
            }

           else if(e > 20 && e < 45){
                this.pufferFishPuffed();
            } 

            else if(e > 67 && e < 70){
                this.pufferFishTransition();
            }

            else if (e > 70 && e < 95){
                this.pufferFishPuffed();
            } 

            else if(e > 120 && e < 123){
                this.pufferFishTransition();
            }

            else if (e > 123 && e < 150){
                this.pufferFishPuffed();
            } 

            else {
                this.pufferFishNormal();
            }
            e++
    }, 280);

    
    setInterval(() => {
        this.moveLeft();
        this.otherDirection = false;
    }, 1000/60);
};


pufferFishTransition() {
    this.playAnimation(this.IMAGES_TRANSITION);
    this.FrameHeight = 40;

};

pufferFishPuffed(){
    this.playAnimation(this.IMAGES_PUFFED);
    this.FrameHeight = 54;
};

pufferFishNormal(){
    this.playAnimation(this.IMAGES_SWIM);
    this.FrameHeight = 40;
};

}