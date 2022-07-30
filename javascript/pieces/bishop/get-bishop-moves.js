import getUpperRightDiagonalCells from "../helper-functions/moves/get-upper-right-diagonal-cells.js";
import getUpperLeftDiagonalCells from "../helper-functions/moves/get-upper-left-diagonal-cells.js";
import getLowerRightDiagonalCells from "../helper-functions/moves/get-lower-right-diagonal-cells.js";
import getLowerLeftDiagonalCells from "../helper-functions/moves/get-lower-left-diagonal-cells.js";
import isPieceNotInGameState from "../helper-functions/is-piece-not-in-game-state.js";

export default function getBishopMoves(color, cell, gameState, id) {
    let bishopMoves = []; 
    const upperRightDiagonalCells = getUpperRightDiagonalCells(color, cell, gameState);
    const upperLeftDiagonalCells = getUpperLeftDiagonalCells(color, cell, gameState);
    const lowerRightDiagonalCells = getLowerRightDiagonalCells(color, cell, gameState);
    const lowerLeftDiagonalCells = getLowerLeftDiagonalCells(color, cell, gameState);

    if (isPieceNotInGameState(gameState, id)) {
        return [];
    }

    bishopMoves.push(...upperRightDiagonalCells);
    bishopMoves.push(...upperLeftDiagonalCells);
    bishopMoves.push(...lowerRightDiagonalCells);
    bishopMoves.push(...lowerLeftDiagonalCells);

    return bishopMoves;
}
