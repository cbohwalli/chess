import getBishopMoves from "./get-bishop-moves.js";
import getValidPieceMoves from "../helper-functions/get-valid-piece-moves.js";

export default class Bishop {
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
        return getBishopMoves(this.color, this.cell, gameState, this.id);
    }

    getCell() {
        return this.cell;
    }
}