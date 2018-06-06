function drawFloor() {
    var floor = document.createElement("div");
    floor.id = "floor";
    document.body.appendChild(floor);
}

function drawGun(pozX, pozY) {
    var gunDiv = document.createElement("div");
    gunDiv.id = "gunDiv";
    gunDiv.style.top = pozY + "px";
    gunDiv.style.left = pozX + "px";
    document.body.appendChild(gunDiv);
}

function drawShot(pozX, pozY) {
    var shot = document.createElement("div");
    shot.className = "shot";
    shot.style.top = pozY + "px";
    shot.style.left = pozX + "px";
    document.body.appendChild(shot);
}

function drawEnemy(pozX, pozY) {
    var enemies = document.createElement("div");
    enemies.className = "enemies";
    enemies.style.top = pozY + "px";
    enemies.style.left = pozX + "px";
    document.body.appendChild(enemies);
}
