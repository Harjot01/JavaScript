const canvas = document.getElementById("gameBoard");
const canvasContext = canvas.getContext("2d");

// Global variables
let speed = 15; // fps

// Grids in our canvas
let tileCount = 22;

// Snake size
let tileSize = 18;

// Snake position
let headX = 10;
let headY = 10;

// Snake speed
let xSpeed = 0;
let ySpeed = 0;

// Food position
let foodAtX = 5;
let foodAtY = 5;

// Snake parts and increasing the size
const snakeParts = [];
let tailLength = 0;

// Game score
let score = 0;

function startGame() {
  if (checkCollision()) {
    alert("Game Over!");
    document.location.reload();
    return;
  }
  setTimeout(startGame, 1000 / speed);
  setScreen();
  drawSnake();
  changeInPos();
  drawFood();
  eatFood();
  drawScore();
  UpdateHighScore();
}

function setScreen() {
  canvasContext.fillStyle = "#b2dc65";
  canvasContext.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

  // Setting a stroke
  // canvasContext.moveTo(0, 30);
  // canvasContext.lineTo(500, 30);
  // canvasContext.stroke();
}

function drawSnake() {
  canvasContext.fillStyle = "#5271d8";

  for (let i = 0; i < snakeParts.length; ++i) {
    let part = snakeParts[i];

    canvasContext.fillRect(
      part.x * tileCount,
      part.y * tileCount,
      tileSize,
      tileSize
    );
  }

  // Draw the snake's head
  canvasContext.fillRect(
    headX * tileCount,
    headY * tileCount,
    tileSize,
    tileSize
  );

  // Add the current head position to the snakeParts array
  snakeParts.push({ x: headX, y: headY });

  if (snakeParts.length > tailLength) {
    snakeParts.shift();
  }
}

document.body.addEventListener("keydown", keyDown);

function keyDown(event) {
  // Upward movement
  if (event.key == "ArrowUp") {
    //prevent the snake from moving in the opposite direction
    if (ySpeed == 1) return;
    ySpeed = -1;
    xSpeed = 0;
  }

  // Downward movement
  if (event.key == "ArrowDown") {
    //prevent the snake from moving in the opposite direction
    if (ySpeed == -1) return;
    ySpeed = 1;
    xSpeed = 0;
  }
  // Left movement
  if (event.key == "ArrowLeft") {
    //prevent the snake from moving in the opposite direction
    if (xSpeed == 1) return;
    xSpeed = -1;
    ySpeed = 0;
  }

  // Right movement
  if (event.key == "ArrowRight") {
    //prevent the snake from moving in the opposite direction
    if (xSpeed == -1) return;
    xSpeed = 1;
    ySpeed = 0;
  }
}

function changeInPos() {
  headX = headX + xSpeed;
  headY = headY + ySpeed;
}

function drawFood() {
  canvasContext.fillStyle = "red";
  canvasContext.fillRect(
    foodAtX * tileCount,
    foodAtY * tileCount,
    tileSize,
    tileSize
  );
}

function eatFood() {
  if (foodAtX == headX && foodAtY == headY) {
    foodAtX = Math.floor(Math.random() * tileCount);
    foodAtY = Math.floor(Math.random() * tileCount);
    tailLength++;
    score++;
  }
}

function drawScore() {
  canvasContext.fillStyle = "black";
  canvasContext.font = "bold 12px 'Fira Code'";
  canvasContext.fillText("Score: " + score, 10, 20);
}

function UpdateHighScore() {
  let storedHighScore = localStorage.getItem("highScore");
  if (storedHighScore === null) {
    storedHighScore = 0;
    localStorage.setItem("highScore", storedHighScore);
  }

  storedHighScore = parseInt(storedHighScore, 10);

  if (score > storedHighScore) {
    localStorage.setItem("highScore", score);
    storedHighScore = score;
  }

  canvasContext.fillText(
    "High Score: " + storedHighScore,
    canvas.clientWidth - 110,
    20
  );
}

function checkCollision() {
  let gameOver = false;
  if (headX < 0 || headX > tileCount || headY < 0 || headY > tileCount)
    gameOver = true;

  for (let i = 0; i < snakeParts.length; ++i) {
    let part = snakeParts[i];
    if (part.x === headX && part.y === headY) {
      gameOver = true;
      break;
    }
  }

  return gameOver;
}

startGame();
