let canvas;
let world;


function init() {
canvas = document.getElementById('canvas');
world = new World(canvas);


console.log('my character is', world.char)
console.log('my enemie is', world.enemies[0])
}