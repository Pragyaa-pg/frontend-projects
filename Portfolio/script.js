/* ===============================
   ⭐ Galaxy Stars Background
================================ */

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();

let stars = [];
const STAR_COUNT = 180;

for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5,
        speed: Math.random() * 0.5 + 0.2
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";

    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();

        star.y += star.speed;

        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(drawStars);
}

drawStars();

window.addEventListener("resize", resizeCanvas);

/* ===============================
   🔽 Smooth Scroll to Projects
================================ */

const projectBtn = document.querySelector(".hero button");

projectBtn.addEventListener("click", () => {
    document
        .getElementById("projects")
        .scrollIntoView({ behavior: "smooth" });
});

/* ===============================
   🌠 Global Comet Cursor Effect
================================ */

const comet = document.createElement("div");
comet.classList.add("comet");
document.body.appendChild(comet);

let mouseX = 0;
let mouseY = 0;
let cometX = 0;
let cometY = 0;

// Track mouse
document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Smooth trailing animation
function animateComet() {
    cometX += (mouseX - cometX) * 0.15;
    cometY += (mouseY - cometY) * 0.15;

    comet.style.left = cometX + "px";
    comet.style.top = cometY + "px";

    requestAnimationFrame(animateComet);
}

animateComet();
