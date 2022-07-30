import getRookMoves from "./get-rook-moves.js";
import getValidPieceMoves from "../helper-functions/get-valid-piece-moves.js";

export default class Rook {
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
        return getRookMoves(this.color, this.cell, gameState, this.id);
    }

    getCell() {
        return this.cell;
    }
}