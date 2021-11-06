function bulletInit() {
    //draw bullets if any are pushed to their array
    for (var i = 0; i < bullets.length; i++) {
        context.fillStyle = bulletColor;
        context.fillRect(
            bullets[i][0],
            bullets[i][1],
            bullets[i][3],
            bullets[i][2]
        )
    }

    for (let i = 0; i < bullets.length; i++) {
        if (bullets[i][0] > -11) {
            if (bullets[i][4] === 'right') { 
                bullets[i][0] += 20; 
            }

            if (bullets[i][4] === 'left') { 
                bullets[i][0] -= 20;
            }
        } 

        if (bullets[i][0] < -10 ||
            bullets[i][0] > window.innerWidth - 8) {
            bullets.splice(i, 1);
        }
        
        //kill enemy action
        if (enemies.length &&
            bullets.length &&
            bullets[i][0] >= enemies[0].x) {
                enemies.splice(0, 1);
        }
    }
}

