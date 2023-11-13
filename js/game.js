let canvas;
let world;
let Kboard = new keyboard();


function init() {
canvas = document.getElementById('canvas');
world = new World(canvas, Kboard);
clearAllIntervals();  /////////////////////////////////// NICHT VERGESSEN ZU LÖSCHEN///////////////////////////////////
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

    if (e.keyCode == 68) {
        Kboard.D = false;
    }; 

    if (e.keyCode == 70) {
        Kboard.F = false;
    };

    if (e.keyCode == 82) {
        Kboard.R = false;
    }
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

    if (e.keyCode == 68) {
        Kboard.D = true;
    }; 

    if (e.keyCode == 70) {
        Kboard.F = true;
    };

    if (e.keyCode == 82) {
        Kboard.R = true;
    }
});


function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
  }


function closeControlls() {
    let controlls = document.getElementById('controlls');
    controlls.style.display = 'none';
}

function openControlls() {
    let controlls = document.getElementById('controlls');
    controlls.style.display = 'flex';
}