class endscreenLose extends drawableObjects {

    width = 0;
    height = 0;
    x = 0;
    y = 0;

    constructor() {
        super().loadImg('img/6.Botones/Tittles/Game Over/Recurso 9.png');
        this.showEndscreenLose();
    }   




    showEndscreenLose() {
        setInterval(() => {
            if(World.dead === true){
                this.height = 180;
                this.width = 720;
                console.log('dead');
            }   
        }, 180);

    }
}