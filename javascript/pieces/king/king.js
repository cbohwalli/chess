import getKingMoves from "./get-king-moves/get-king-moves.js";

export default class King {
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
        return getKingMoves(this.color, this.cell, gameState);
    }

    getCell() {
        return this.cell;
    }
}