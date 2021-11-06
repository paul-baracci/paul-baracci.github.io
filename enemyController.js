function enemyInit() {
    // draw enemy that follows playery
    if (enemies.length) {
        context.beginPath();
        context.arc(
            playerx + 200,
            playery - spriteWidth / 2,
            20,
            0,
            2 * Math.PI
        );
        context.fillStyle = 'red';
        context.fill();
    }
}

