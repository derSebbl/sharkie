class level {
    enemies;
    BackgroundObjects;
    coin;
    level_end_x = 3500;
    

    constructor(enemies, coins, BackgroundObjects) {
        this.enemies = enemies;
        this.BackgroundObjects = BackgroundObjects;
        this.coin = coins;
    }
}