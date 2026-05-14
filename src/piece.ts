import {SHAPES, COLORS, BLOCK_SIZE} from './constants';

export class Piece {
    x: number;
    y: number;
    shape: number[][];
    color: string;

    constructor() {
        const typeId = Math.floor(Math.random() * 7) + 1;
        
        this.shape = SHAPES[typeId];
        this.color = COLORS[typeId];

        this.x = Math.floor((10 - this.shape[0].length) / 2);
        this.y = 0;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;

        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    const pixelX = (this.x + x) * BLOCK_SIZE;
                    const pixelY = (this.y + y) * BLOCK_SIZE;

                    ctx.fillRect(pixelX, pixelY, BLOCK_SIZE, BLOCK_SIZE);
                    ctx.strokeStyle = '#000';
                    ctx.strokeRect(pixelX, pixelY, BLOCK_SIZE, BLOCK_SIZE);
                }
            });
        });
    }
    moveDown(){
        this.y++
    }

    rotate(){
        const matrixClone = this.shape.map((_, i) =>
            this.shape.map(row => row[i])
        );
        this.shape = matrixClone.map(row => row.reverse())
    }
}