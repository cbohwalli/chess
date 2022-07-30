import { startGameStateCells } from "./game-state-modules/start-game-state-cells.js"

class GameState {
    constructor() {
        const startGameState = JSON.parse(JSON.stringify(startGameStateCells));

        this.gameStateCells = startGameState;
        this.turn = "white";
        this.enPassant = null;
        this.kingChecked = null;
    }
    
    getGameState() {
        return this.gameStateCells;
    }
    
    changeGameState(previousCell, currentCell, piece) {
        this.gameStateCells[previousCell] = null;
        this.gameStateCells[currentCell] = piece;
    }
    
    setNewGameState(newGameState) {
        this.gameStateCells = newGameState;
    }

    changeTurn() {
        if (this.turn === "white") {
            this.turn = "black";
        } else {
            this.turn = "white";
        }
    }

    getTurn() {
        return this.turn;
    }

    reset() {
        const startGameState = JSON.parse(JSON.stringify(startGameStateCells));
        this.gameStateCells = startGameState;
        this.turn = "white"
    }

    setEnPassant(idOrNull) {
        this.enPassant = idOrNull;
    }

    getEnPassant() {
        return this.enPassant;
    }

    setKingChecked(color) {
        this.kingChecked = color;
    }

    getKingChecked() {
        return this.kingChecked;
    }
}

export const gameState = new GameState();