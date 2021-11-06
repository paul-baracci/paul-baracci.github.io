function drawPlayer() {
    // draw player sprite
    context.drawImage(
        playerImage,
        framex * spriteWidth,
        framey * spriteHeight,
        spriteWidth, 
        spriteHeight,
        playerx + spriteWidth / 2,
        playery,
        -spriteWidth,
        -spriteHeight
    )
}

function playerInit() {
    playerx += xvelocity;
    playery += yvelocity;

    if (onGround) {
        xvelocity *= 0.8; 
        framey = 0;
    } else {
        yvelocity += 1.1;
        xvelocity *= 0.99;
        framex = 0;
        framey = 2;
    }

    if (playery > window.innerHeight) {
        xvelocity = yvelocity = 0;
        playerx = playery = 200;
    }

    if (playerx < 0) {
        playerx = window.innerWidth - 8;
    }

    if (playerx > window.innerWidth - 8) {
        playerx = 0;
    }

    onGround = false;

    for (i = 0; i < totalPlatforms; i++) {
        if (
            playerx > platforms[i].x - 20 && 
            playerx < platforms[i].x + platforms[i].w + 20 &&
            playery > platforms[i].y &&
            playery < platforms[i].y + platforms[i].h 
        ) {
            playery=platforms[i].y;
            onGround = true;

            if (holdRight) {
                xvelocity += 1.5;
                framey=0;

                if (framex < 3) {
                    framex++;
                } else framex = 1;
            }

            if (holdLeft) {
                xvelocity -= 1.5;
                framey=1;

                if (framex < 3) {
                    framex++;
                } else framex = 1
            }
        }
    }
}

