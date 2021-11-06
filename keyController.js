function keyDown(evt) {
    switch(evt.keyCode) {
        case 32: //space bar
            if (bullets.length <= bulletLimit - 1) bullets.push([
                playerx,
                playery - 50,
                4,
                20,
                playerDirection
            ]);
        break;

        case 37: //left arrow key
            holdLeft=true;
            playerDirection = 'left';
        break;

        case 38: //up arrow key
            if(onGround) {
                yvelocity = -12;
                framex = 0;
                framey = 2;
            }
        break;

        case 39: //right arrow key
            holdRight=true;
            playerDirection = 'right';
        break;
    }
}

function keyUp(evt) {
    switch(evt.keyCode) {
        case 37:
            holdLeft=false;
            framex = 0;
        break;

        case 38:
            if(yvelocity<-3) {
                yvelocity = -3;
            }
        break;

        case 39:
            holdRight=false;
            framex = 0;
        break;
    }
}

