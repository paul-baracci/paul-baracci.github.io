function drawPlatforms() {
    for (i = 0; i < totalPlatforms; i++) {
        context.lineWidth = 2;
        context.strokeStyle='black';
        context.strokeRect(
            platforms[i].x,
            platforms[i].y,
            platforms[i].w,
            platforms[i].h
        );
    }
}
