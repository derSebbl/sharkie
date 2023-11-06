class statusBar extends drawableObjects {

    HEALTH_IMAGES = [
        'img/4. Marcadores/Purple/0__1.png',
        'img/4. Marcadores/Purple/20__1.png',
        'img/4. Marcadores/Purple/40__1.png',
        'img/4. Marcadores/Purple/60__1.png',
        'img/4. Marcadores/Purple/80__1.png',
        'img/4. Marcadores/Purple/100__1.png',
    ];

    percentage = 100;

    constructor() {
        this.loadImages(this.HEALTH_IMAGES);
    };


    setPercantage(percent){
        this.percentage = percent;
        let path = images[this.setPercentIndex];
        this.img = this.HEALTH_IMAGES[path];
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
        else if (this.percentage >= 20){
            return 1;
        }
        else {
            return 0;
        }
    };





}