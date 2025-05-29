// Music toggle
const music = document.getElementById("birthdayMusic");
function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// Confetti Animation
const confettiCanvas = document.getElementById("confetti-canvas");
const confettiCtx = confettiCanvas.getContext("2d");
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

let confettis = [];
for (let i = 0; i < 150; i++) {
  confettis.push({
    x: Math.random() * confettiCanvas.width,
    y: Math.random() * confettiCanvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 150 + 10,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    tilt: Math.random() * 10 - 10
  });
}

function drawConfetti() {
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettis.forEach(c => {
    confettiCtx.beginPath();
    confettiCtx.lineWidth = c.r;
    confettiCtx.strokeStyle = c.color;
    confettiCtx.moveTo(c.x + c.tilt, c.y);
    confettiCtx.lineTo(c.x, c.y + c.tilt + 10);
    confettiCtx.stroke();
  });

  updateConfetti();
  requestAnimationFrame(drawConfetti);
}

function updateConfetti() {
  confettis.forEach(c => {
    c.y += Math.cos(c.d) + 1 + c.r / 2;
    c.x += Math.sin(0.5);
    if (c.y > confettiCanvas.height) {
      c.y = -10;
      c.x = Math.random() * confettiCanvas.width;
    }
  });
}

drawConfetti();

// Heart Animation
const heartCanvas = document.getElementById("heart-canvas");
const heartCtx = heartCanvas.getContext("2d");
heartCanvas.width = window.innerWidth;
heartCanvas.height = window.innerHeight;

const hearts = [];
for (let i = 0; i < 50; i++) {
  hearts.push({
    x: Math.random() * heartCanvas.width,
    y: Math.random() * heartCanvas.height,
    size: Math.random() * 10 + 10,
    speed: Math.random() * 1 + 0.5,
    alpha: Math.random() * 0.5 + 0.5
  });
}

function drawHearts() {
  heartCtx.clearRect(0, 0, heartCanvas.width, heartCanvas.height);
  hearts.forEach(h => {
    heartCtx.beginPath();
    heartCtx.fillStyle = `rgba(255, 105, 180, ${h.alpha})`;
    heartCtx.font = `${h.size}px serif`;
    heartCtx.fillText("💖", h.x, h.y);
  });

  updateHearts();
  requestAnimationFrame(drawHearts);
}

function updateHearts() {
  hearts.forEach(h => {
    h.y -= h.speed;
    if (h.y < -20) {
      h.y = heartCanvas.height + 20;
      h.x = Math.random() * heartCanvas.width;
    }
  });
}

drawHearts();
