function drawGoal() {
    context.fillStyle = goalColor;
    context.fillRect(
        goal.x - 20,
        goal.y - 40,
        goal.w,
        goal.h
    );
}

function goalReached() {
    if (playerx + spriteWidth / 2 >= goal.x - 5 &&
        playerx - spriteWidth / 2 <= goal.x + 5 && 
        playery + spriteHeight / 2 >= goal.y + 10 &&
        playery - spriteHeight / 2 <= goal.y - 10) {
            alert('You Win! Generate next level?');
            location = location;
    }
}

