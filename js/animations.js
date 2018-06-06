var enemiesDivs;
function mainAnimation() {
    if (document.getElementById("gunDiv") == null) { drawGun(pozX, pozY); }
    gun = document.getElementById("gunDiv")

    var a = 100;
    var b = a + 600;
    var positionX = Math.floor(Math.random() * b + a)

    for (var i = 0; i < 4; i++) { drawEnemy(positionX + i * 73.5, 100 * i) }

    enemiesDivs = document.getElementsByClassName("enemies");
    setInterval(function () {
        setTimeout(function () {
            for (var i = 0; i < enemiesDivs.length; i++) {
                enemiesDivs[i].style.backgroundImage = "url('graphics/enemy.png')";
            }
        }, 250);
        for (var i = 0; i < enemiesDivs.length; i++) {
            enemiesDivs[i].style.backgroundImage = "url('graphics/enemy2.png')";
        }
    }, 500);

    var down = true;
    var x = [];
    var y = [];
    var interval2 = setInterval(function () {
        for (var i = 0; i < enemiesDivs.length; i++) {
            x[i] = parseInt(enemiesDivs[i].style.left);
            y[i] = parseInt(enemiesDivs[i].style.top);

            if (y[i] < 150 && x[i] <= 400) {
                x[i] -= 30;
                y[i] += 20;
            }
            else if (y[i] >= 150 && x[i] <= 400) {
                x[i] += 30;
                y[i] += 20;
            }
            else if (x[i] > 400 && y[i] >= 150) {
                x[i] += 30;
                y[i] -= 20;
            }
            else if (x[i] > 400 && y[i] < 150) {
                x[i] -= 30;
                y[i] -= 20;
            }

            if (x[i] < 100) {
                x[i] = 130;
            }
            else if(x[i] > 600) {
                x[i] = 590;
            }

            enemiesDivs[i].style.top = y[i] + "px";
            enemiesDivs[i].style.left = x[i] + "px";
        }
    }, 100);
}


function animationStart() {
    if (startPage) {
        ctx.clearRect(0, 0, 600, 700);
        for (var i = 0; i < 4; i++) {
            ctx.drawImage(enemies, x[i], y[i]);
            if (y[i] < 150 && x[i] <= 550 / 2) {
                x[i] -= 3;
                y[i] += 2;
            }
            else if (y[i] >= 150 && x[i] <= 550 / 2) {
                x[i] += 3;
                y[i] += 2;
            }
            else if (x[i] > 550 / 2 && y[i] >= 150) {
                x[i] += 3;
                y[i] -= 2;
            }
            else if (x[i] > 550 / 2 && y[i] < 150) {
                x[i] -= 3;
                y[i] -= 2;
            }
        }
        requestAnimationFrame(animationStart)
    }
}