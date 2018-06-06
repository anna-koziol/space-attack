function bulletsAdding(pozX, pozY) {
    var bullet = document.createElement("div");
    bullet.className = "bullet";
    bullet.style.top = pozY + "px";
    bullet.style.left = pozX + "px";
    bullet.style.backgroundImage = "url('graphics/bullet-" + Math.floor((Math.random() * 2) + 1) + ".png')";
    document.body.appendChild(bullet);

    this.animate = function () {
        var animation = setInterval(function () {
            bullet.style.top = (parseInt(bullet.style.top) + 10) + "px";

            if (parseInt(bullet.style.top) > 450 && cannons > 0) {
                clearInterval(animation);
                document.body.removeChild(bullet);
            }

            if (parseInt(bullet.style.left) > parseInt(gun.style.left) && parseInt(bullet.style.left) < parseInt(gun.style.left) + 52 && parseInt(bullet.style.top) == 430 && cannons > 0) {
                console.log("Trafiony")
                cannons--;
                gun.style.backgroundImage = "url('graphics/explosion.png')";
                setTimeout(function () {
                    gun.style.backgroundImage = "url('graphics/gun.png')";
                }, 1000);
                document.getElementById("cannons").innerHTML = cannons;
            }
        }, 100);
    }
}