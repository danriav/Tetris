import { Piece } from './piece';
import { Board } from './board';
import { BLOCK_SIZE, COLS, ROWS } from './constants';

const canvas = document.getElementById('tetris') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
const nextCanvas = document.getElementById('next') as HTMLCanvasElement;
const nextCtx = nextCanvas.getContext('2d')!;
const overlay = document.getElementById('game-over-overlay') as HTMLDivElement;
const restartBtn = document.getElementById('restart-btn') as HTMLButtonElement;

let board = new Board();
let currentPiece = new Piece();
let nextPiece = new Piece();
let gameOver = false;
let lastTime = 0;
let dropCounter = 0;
let score = 0
const dropInterval = 1000;

function gameLoop(timestamp: number = 0) {
    if (gameOver) return;

    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    dropCounter += deltaTime;
    if (dropCounter > dropInterval) {
        movePieceDown();
        dropCounter = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawGrid();
    board.draw(ctx);
    currentPiece.draw(ctx)

    drawNextPiece();
    drawScore();

    requestAnimationFrame(gameLoop);
}

function movePieceDown() {
    if (board.validMove(currentPiece, currentPiece.x, currentPiece.y + 1)) {
        currentPiece.moveDown();
    } else {
        board.merge(currentPiece);
       
        const linesCleared = board.clearLines();
        if (linesCleared > 0) {
            updateScore(linesCleared);
        }

        currentPiece = nextPiece;
        nextPiece = new Piece();

        if (!board.validMove(currentPiece, currentPiece.x, currentPiece.y)) {
            gameOver = true;
            showGameOver();
        }
    }
}

function updateScore(lines: number) {
    const points = [0, 100, 300, 500, 800];
    score += points[lines];
    
    const scoreElement = document.getElementById('score-val');
    if (scoreElement) {
        scoreElement.innerText = score.toString();
    }
}

function drawScore(){
ctx.fillStyle = '#ffffff'; // Blanco brillante
    ctx.font = '22px Arial';   // Tamaño y fuente
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';  // Para que (10, 10) sea la esquina superior
    
    // Dibujamos una pequeña sombra negra para que se lea mejor sobre cualquier color
    ctx.shadowColor = 'black';
    ctx.shadowBlur = 4;
    ctx.fillText(`SCORE: ${score}`, 10, 10);
    
    // Limpiamos la sombra para no afectar al resto de dibujos
    ctx.shadowBlur = 0;
}

function drawGrid() {
    ctx.strokeStyle = '#333';
    for (let i = 0; i < COLS; i++) {
        for (let j = 0; j < ROWS; j++) {
            ctx.strokeRect(i * BLOCK_SIZE, j * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
        }
    }
}

function drawNextPiece() {
    nextCtx.clearRect(0, 0, nextCanvas.width, nextCanvas.height);

    nextPiece.shape.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value > 0) {
                nextCtx.fillStyle = nextPiece.color;

                const offset = (120 - (nextPiece.shape.length * 30)) / 2;

                nextCtx.fillRect(x * 30 + offset, y * 30 + offset, 30, 30)
                nextCtx.strokeStyle = '#000'
                nextCtx.strokeRect(x * 30 + offset, y * 30 + offset, 30, 30)
            }
        });
    });
}

function resetGame() {
    board = new Board();
    currentPiece = new Piece();
    nextPiece = new Piece();
    score = 0;
    gameOver = false;

    overlay.style.display = 'none';

    const scoreElement = document.getElementById('score-val');
    if (scoreElement) {
        scoreElement.innerText = '0';
    }

    lastTime = 0;
    requestAnimationFrame(gameLoop);
}

function showGameOver() {
    overlay.style.display = 'flex';
}

window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        if (board.validMove(currentPiece, currentPiece.x - 1, currentPiece.y)){
            currentPiece.x--;
        }
    }
    if (event.key === 'ArrowRight'){
        if (board.validMove(currentPiece, currentPiece.x + 1, currentPiece.y)){
            currentPiece.x++;
        }
    }
    if (event.key === 'ArrowDown') {
        movePieceDown();
    }
    if (event.key === 'ArrowUp') {
        const oldShape = currentPiece.shape;

        currentPiece.rotate();

        if (!board.validMove(currentPiece, currentPiece.x, currentPiece.y)) {
            currentPiece.shape = oldShape;
        }
    }
});

restartBtn.addEventListener('click', resetGame);

gameLoop();