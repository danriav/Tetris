import { BLOCK_SIZE, COLS, ROWS, COLORS } from './constants';
import { Piece } from './piece';

export class Board {
    grid: number[][];

    constructor() {
        this.grid = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
    }

    validMove(piece: Piece, nextX: number, nextY: number): boolean {
        return piece.shape.every((row, y) => {
            return row.every((value, x) => {
                if (value === 0) return true;

                const targetX = nextX + x;
                const targetY = nextY + y;

                const isInsideLeftWall = targetX >= 0;
                const isInsideRightWall = targetX < COLS;
                const isAboveFloor = targetY < ROWS;
                const isNotOccupied = this.grid[targetY] !== undefined && this.grid[targetY][targetX] === 0;

                return isInsideLeftWall && isInsideRightWall && isAboveFloor && isNotOccupied;
            });
        });
    }

    merge(piece: Piece) {
        piece.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.grid[piece.y + y][piece.x + x] = value
                }
            });
        });
    }

    draw(ctx: CanvasRenderingContext2D) {
        this.grid.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    ctx.fillStyle = COLORS[value];
                    ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
                    ctx.strokeStyle = '#000';
                    ctx.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE)
                }
            });
        });
    }

    clearLines(): number {
        let linesCleared = 0;

        this.grid = this.grid.filter(row => {
            const isLineFull = row.every(value => value > 0);
            if (isLineFull) {
                linesCleared++;
                return false;
            }
            return true;
        });
        while (this.grid.length < ROWS) {
            this.grid.unshift(Array(COLS).fill(0));
        }
        return linesCleared
    }
}