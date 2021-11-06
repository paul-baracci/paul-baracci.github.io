window.onload = function () {
    canvas=document.getElementById('gc');
    canvas.setAttribute('width', window.innerWidth - 8);
    canvas.setAttribute('height', window.innerHeight - 25);
    context=canvas.getContext('2d');
    setInterval(update, 1000 / 30);
    document.addEventListener('keyup', keyUp);
    document.addEventListener('keydown', keyDown);

    goal = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      w: 40,
      h: 60
    }

    enemies.push({
        x: playerx + 200,
        y: playery - spriteWidth / 2,
        r: 20
    });

    for (i = 0; i < totalPlatforms; i++) {
        platforms.push({
            x:Math.random() * canvas.width,
            y:Math.random() * canvas.height,
            w:Math.random() * 100 + 50,
            h:Math.random() * 30 + 30
        });
    }
}

