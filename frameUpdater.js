function update() {
    drawBackground();

    playerInit();
    drawPlayer();

    goalReached();
    drawGoal();
    
    drawPlatforms();
    
    enemyInit();
    bulletInit();
}

