let level1; 

async function initLevel() {

level1 = new level(
        [
        createPufferFish(),
        createPufferFish(),
        createPufferFish(),
        createPufferFish(),
        createPufferFish(),
        createPufferFish(),
        ],
        [
        createJellyFish(),
        createJellyFish(),
        createJellyFish(),
        createJellyFish(),
        createJellyFish(),
        createJellyFish(),
        createJellyFish(),
        ],
        [
        createEndboss(),
        ],
        [
        createCoins(),
        createCoins(),
        createCoins(),
        createCoins(),
        createCoins(),
        createCoins(),
        createCoins(),
        createCoins(),
        ],
        [
        createPoison(),
        createPoison(),
        createPoison(),
        createPoison(),
        createPoison(),
        createPoison(),
        createPoison(),
        createPoison(),
        ],
        [
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', -719, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', -719, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', -719, 0),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', -719, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', -719, 0),
    
        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 0, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 0, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 0, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 0, 0),
    
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 719, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719, 0),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 719, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 719, 0),
    
        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 719*2, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 719*2, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 719*2, 0),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 719*2, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 719*2, 0),
    
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 719*3, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719*3, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719*3, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 719*3, 0),
    
        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 719*4, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 719*4, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 719*4, 0),
        new BackgroundObject('img/3. Background/Layers/1. Light/1.png', 719*4, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 719*4, 0),

        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 719*5, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719*5, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719*5, 0),
        new BackgroundObject('img/3. Background/Layers/1. Light/2.png', 719*5, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 719*5, 0),
        ],
)

function createPufferFish(){
        return new FishPuffer();
};

function createJellyFish(){
        return new jellyFish();
};

function createEndboss(){
        return new endboss();
};

function createCoins(){
        return new coins();
};

function createPoison(){
        return new poison();
};

};