class poisonBubble extends movableObject {

    height = 20;
    width = 30; 

    FrameX = 0;
    FrameY = 0;
    FrameWidth = 30;
    FrameHeight = 20;

    constructor(x, y) {
        super().loadImg('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        this.x = x;
        this.y = y;
        this.throw();
    }

throw() {
    setInterval(()=>{ 
        if (this.otherDirection == false){
        this.x += 5;}
        else if (this.otherDirection == true){
            this.x -= 5;
        }
    }, 1000 / 60);
};

}