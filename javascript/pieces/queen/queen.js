import getQueenMoves from "./get-queen-moves.js";
import getValidPieceMoves from "../helper-functions/get-valid-piece-moves.js";

export default class Queen {
    constructor(color, id, cell) {
        this.color = color;
        this.id = id;
        this.cell = cell;
    }

    getId() {
        return this.id;
    }

    getColor() {
        return this.color;
    }

    getMoves(gameState) {
        return getQueenMoves(this.color, this.cell, gameState, this.id);
    }

    getCell() {
        return this.cell;
    }
}