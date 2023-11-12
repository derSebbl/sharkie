class endscreen extends drawableObjects {

    width = 0;
    height = 0;

    constructor() {
        super().loadImg('img/6.Botones/Tittles/You win/Mesa de trabajo 1.png');
        this.showEndscreen();
    }   

    showEndscreen() {
        setInterval(() => {
            if(World.BossDead == true){
                this.height = 480;
                this.width = 720;
            }   
        }, 180);

    }
}
