let canvas;
let world;
let Kboard = new keyboard();

let intervalIds = [];


function init() {
canvas = document.getElementById('canvas');
world = new World(canvas, Kboard);
//clearAllIntervals();  /////////////////////////////////// NICHT VERGESSEN ZU LÖSCHEN///////////////////////////////////
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
  };


  function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
  };


// Functions to open and close the controlls screen
function closeControlls() {
    showStartButton();
    hideBackground();
    let controlls = document.getElementById('controlls');
    controlls.style.display = 'none';
};


function openControlls() {
    closeInfo();
    hideStartButton();
    showBackground(); 
    let controlls = document.getElementById('controlls');
    if(controlls.style.display == 'none') {
        controlls.style.display = 'flex';
    }
    else {
        controlls.style.display = 'none';
        showStartButton();
        hideBackground();
}
};

// Functions to open and close the info screen
function closeInfo() {
    showStartButton();
    hideBackground();
    let info = document.getElementById('Info');
    info.style.display = 'none';
};


function openInfo() {
    closeControlls();
    hideStartButton();
    showBackground(); 
    let info = document.getElementById('Info');
    if(info.style.display == 'none') {
        info.style.display = 'flex';
    }
    else {
        info.style.display = 'none';
        showStartButton();
        hideBackground();
}
};

// Functions to mute and unmute the sounds
function muteAllSounds() {
    let allAudioElements = document.getElementsByTagName('audio');
    for(let i = 0; i < allAudioElements.length; i++) {
        allAudioElements[i].muted = true;
    }
};

// Functions to show and hide the Try Again Button
function showTryAgainButton() {
    let tryAgainButton = document.getElementById('try-again-button');
    tryAgainButton.style.display = 'flex';
};


function TryAgain() {
    let tryAgainButton = document.getElementById('try-again-button');
    tryAgainButton.style.display = 'none';
        clearAllIntervals();
        intervalIds = [];
        initLevel();
        init();
};

// Functions to show and hide the Start Button
function hideStartButton() {
    let startButton = document.getElementById('start-game-button');
    startButton.style.display = 'none';
};


function showStartButton() {
    let startButton = document.getElementById('start-game-button');
    startButton.style.display = 'flex';
};

// Functions to start the game
function startGame() {
    let startscreen = document.getElementById('startscreen-container');
    let canvas = document.getElementById('canvas-container');
    startscreen.style.display = 'none';
    canvas.style.display = 'flex';
    hideStartButton();
    initLevel();
    init();
};

// Functions to show and hide the background
function showBackground() {
    let background = document.getElementById('background');
    background.style.display = 'block';
};


function hideBackground() {
    let background = document.getElementById('background');
    background.style.display = 'none';
};
