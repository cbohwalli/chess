import getCaptureMoves from "./get-capture-moves.js";
import isPieceNotInGameState from "../../helper-functions/is-piece-not-in-game-state.js";
import getEnPassantMove from "./get-en-passant-move.js";

export default function getPawnMoves(cell, gameState, color, id) {
    const pawnMoves = [];
    pawnMoves.push(...getForwardMoves(cell, gameState, color));
    pawnMoves.push(...getCaptureMoves(cell, gameState, color));
    pawnMoves.push(...getEnPassantMove(id));
    
    if (isPieceNotInGameState(gameState, id)) {
        return [];
    }
    
    return pawnMoves;
}

function getForwardMoves(cell, gameState, color) {

    let forwardMoves = [];
    const column = cell.substring(0,1);
    const row = parseInt(cell.substring(1,2));
    const startingRow = (color === "white" ? 2 : 7);
    const forwardCell1 = (color === "white" ? column + (row + 1) : column + (row - 1));
    const forwardCell2 = (color === "white" ? column + (row + 2) : column + (row - 2));

    if (gameState[forwardCell1] !== null) {
        return [];
    }

    forwardMoves.push(forwardCell1);
   
    if (row === startingRow && gameState[forwardCell2] === null) {
        forwardMoves.push(forwardCell2);
    }

    return forwardMoves;
}