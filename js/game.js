let canvas;
let world;
let Kboard = new keyboard();


function init() {
canvas = document.getElementById('canvas');
world = new World(canvas, Kboard);


console.log('my character is', world.char)
}


window.addEventListener('keyup', (e) => {
    if (e.keyCode == 39) {
        Kboard.RIGHT = false;
    };

    if (e.keyCode == 37) {
        Kboard.LEFT = false;
    };

    if (e.keyCode == 38) {
        Kboard.UP = false;
    };

    if (e.keyCode == 40) {
        Kboard.DOWN = false;
    };

    if (e.keyCode == 32) {
        Kboard.SPACE = false;
    };
});

window.addEventListener('keydown', (e) => {
    if (e.keyCode == 39) {
        Kboard.RIGHT = true;
    };

    if (e.keyCode == 37) {
        Kboard.LEFT = true;
    };

    if (e.keyCode == 38) {
        Kboard.UP = true;
    };

    if (e.keyCode == 40) {
        Kboard.DOWN = true;
    };

    if (e.keyCode == 32) {
        Kboard.SPACE = true;
    };
});