// Fungsi Play/Pause Musik
let music = document.getElementById("bg-music");
function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// Efek Salju
function createSnowflakes() {
    for (let i = 0; i < 50; i++) {
        let snowflake = document.createElement("div");
        snowflake.innerHTML = "❄";
        snowflake.classList.add("snowflake");
        document.body.appendChild(snowflake);

        let randomX = Math.random() * window.innerWidth;
        let randomDuration = Math.random() * 5 + 3;
        let randomSize = Math.random() * 20 + 10;

        snowflake.style.left = randomX + "px";
        snowflake.style.animationDuration = randomDuration + "s";
        snowflake.style.fontSize = randomSize + "px";

        setTimeout(() => {
            snowflake.remove();
        }, randomDuration * 1000);
    }
}

setInterval(createSnowflakes, 500);