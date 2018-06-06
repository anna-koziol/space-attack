var enemies, gun, ctx;
var startPage = true;
var pozX = 350;
var pozY = 450;
var yEnemies = 0;
var cannons = 5;
var x = [275, 20, 275, 530];
var y = [50, 150, 300, 150];
var points = 0;
var pls = 0;
var test, date, startTime;
var loose = false;

document.addEventListener("DOMContentLoaded", function (event) {
    var game = document.getElementById("action");
    ctx = game.getContext("2d");
    var counterSpace = 0;

    document.body.addEventListener("keydown", function (e) {
        switch (e.keyCode) {
            //SPACJA
            case 32:
                counterSpace++;
                if (counterSpace == 1) {
                    date = new Date();
                    startTime = date.getTime();

                    startPage = false;
                    document.getElementById("canvasLetter").style.display = "none";
                    ctx.clearRect(0, 0, 600, 600);
                    drawFloor();
                    mainAnimation();


                    test = setInterval(function () {
                        if (cannons > 0) {
                            var randomPositionX = Math.floor(Math.random() * 500 + 100)
                            var newBullet = new bulletsAdding(randomPositionX, 100);
                            newBullet.animate();
                        }
                        else {
                            //KONIEC GRY 
                            loose = true;
                            clearInterval(test)
                            document.body.innerHTML = "";

                            var end = document.createElement("div");
                            end.id = "end";
                            document.body.appendChild(end);

                            var pink = document.createElement("div");
                            pink.className = "textPink";
                            pink.innerHTML = "GAME OVER";
                            end.appendChild(pink);
                        }
                    }, 1000);

                }

                break;
            //CTRL -  STRZAŁ
            case 17:
                if (!startPage && !loose) {
                    var pozXShot = pozX + 20;
                    var pozYShot = 440;
                    drawShot(pozXShot, pozYShot);

                    var bullets = document.getElementsByClassName("shot");
                    var interval = setInterval(function () {
                        for (var i = 0; i < bullets.length; i++) {
                            bullets[i].style.top = (parseInt(bullets[i].style.top) - 30) + "px";
                            if (parseInt(bullets[i].style.top) < 20) {
                                clearInterval(interval);
                                document.body.removeChild(bullets[i]);
                            }

                            //KOLIZJE - STRZAŁ W ENEMY
                            for (var j = 0; j < enemiesDivs.length; j++) {
                                if (parseInt(bullets[i].style.left) > parseInt(enemiesDivs[j].style.left) && parseInt(bullets[i].style.left) < parseInt(enemiesDivs[j].style.left) + 67 &&
                                    parseInt(bullets[i].style.top) > parseInt(enemiesDivs[j].style.top) && parseInt(bullets[i].style.top) < parseInt(enemiesDivs[j].style.top) + 58 &&
                                    cannons > 0 && enemiesDivs.length > 0) {
                                    enemiesDivs[j].style.backgroundImage = "url('graphics/explosion.png')";
                                    var toRemove = enemiesDivs[j];
                                    setTimeout(function () {
                                        document.getElementById("scoreUser").innerHTML = 250 - (enemiesDivs.length * 50);
                                        document.getElementById("scoreUserBest").innerHTML = 250 - (enemiesDivs.length * 50);
                                        document.body.removeChild(toRemove);
                                    }, 500);
                                }
                            }
                        }
                    }, 100);
                }

                if (enemiesDivs.length == 0) {
                    pls++;
                    if (pls == 1 && !loose) {
                        //KONIEC GRY 
                        clearInterval(test)
                        startPage = true;
                        document.body.innerHTML = "";

                        var end = document.createElement("div");
                        end.id = "end";
                        document.body.appendChild(end);

                        var dateN = new Date();
                        var startTimeN = dateN.getTime();
                        var times = (startTimeN - startTime) / 600;
                        var time = Math.round(times);

                        var pink = document.createElement("div");
                        pink.className = "textPink";
                        pink.innerHTML = "CONGRATULATIONS YOU WIN IN: " + time + " SECONDS";// + Round(times / 2, 2) + "SECONDS";
                        end.appendChild(pink);
                    }
                }
                break;
            //LEWO
            case 37:
                if (!startPage) {
                    if (pozX > 130) { pozX -= 20; }
                    gun.style.top = pozY + "px";
                    gun.style.left = pozX + "px";
                }
                break;
            //PRAWO
            case 39:
                if (!startPage) {
                    if (pozX < 600) { pozX += 20; }
                    gun.style.top = pozY + "px";
                    gun.style.left = pozX + "px";
                }
                break;

        }


    })

    enemies = new Image();
    enemies.onload = animationStart();
    setInterval(function () {
        setTimeout(function () { enemies.src = "graphics/enemy2.png"; }, 250);
        enemies.src = "graphics/enemy.png";
    }, 500);
});
