class bubble extends movableObject {

    height = 10;
    width = 15; 

    constructor(x, y) {
        super().loadImg('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x;
        this.y = y;
        this.throw();
    }

throw() {
    setInterval(()=>{
        this.x += 5;
    }, 25);
};

}

