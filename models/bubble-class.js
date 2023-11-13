class bubble extends movableObject {

    height = 20;
    width = 30; 

    FrameX = 0;
    FrameY = 0;
    FrameWidth = 30;
    FrameHeight = 20;

    constructor(x, y) {
        super().loadImg('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x;
        this.y = y;
        this.throw();
    }

throw() {
    setInterval(()=>{ 
        this.x += 5;
        this.y -= 1;
    }, 1000 / 60);
};

}

