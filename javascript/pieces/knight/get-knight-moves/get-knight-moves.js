import getKnightPattern from "./get-knight-pattern.js";
import removeInvalidCells from "../../helper-functions/remove-invalid-cells.js";
import isPieceNotInGameState from "../../helper-functions/is-piece-not-in-game-state.js";

export default function getKnightMoves(color, cell, gameState, id) {
    const knightPattern = getKnightPattern(cell, gameState);
    const knightMoves = removeInvalidCells(knightPattern, gameState, color); 

    if (isPieceNotInGameState(gameState, id)) {
        return [];
    }

    return knightMoves; // array of valid knight moves
}