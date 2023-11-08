class level {
    enemies;
    BackgroundObjects;
    coin;
    poison;
    level_end_x = 3500;
    

    constructor(enemies, coins, poison, BackgroundObjects) {
        this.enemies = enemies;
        this.BackgroundObjects = BackgroundObjects;
        this.coin = coins;
        this.poison = poison;
    }
}