class healthBar extends drawableObjects {

    HEALTH_IMAGES = [
        'img/4. Marcadores/Purple/0_ .png',
        'img/4. Marcadores/Purple/20__1.png',
        'img/4. Marcadores/Purple/40_ .png',
        'img/4. Marcadores/Purple/60_ .png',
        'img/4. Marcadores/Purple/80_ .png',
        'img/4. Marcadores/Purple/100_ .png',
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.HEALTH_IMAGES);
        this.x = 5;
        this.y = -5;
        this.height = 50;
        this.width = 140;
        this.setPercantage(100);
    };


    setPercantage(percent){
        this.percentage = percent;
        let path = this.HEALTH_IMAGES[this.setPercentIndex()];
        this.img = this.imageCache[path];
    };


    setPercentIndex(){
        if (this.percentage == 100) {
            return 5;
        }
        else if (this.percentage >= 80) {
            return 4;
        }
        else if (this.percentage >= 60){
            return 3;
        }
        else if (this.percentage >= 40){
            return 2;
        }
        else if (this.percentage >= 1){
            return 1;
        }
        else {
            return 0;
        }
    };





}