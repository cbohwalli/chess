import getPawnMoves from "./get-pawn-moves/get-pawn-moves.js";
import getValidPieceMoves from "../helper-functions/get-valid-piece-moves.js";

export default class Pawn {
    constructor(color, id, cell) {
        this.color = color;
        this.id = id;
        this.cell = cell;
        this.justMoved = false;
    }

    getId() {
        return this.id;
    }

    getColor() {
        return this.color;
    }

    getJustedMoved() {
        return this.justMoved;
    } 

    getMoves(gameState) {
        return getPawnMoves(this.cell, gameState, this.color, this.id);
    }

    getCell() {
        return this.cell;
    }
}

