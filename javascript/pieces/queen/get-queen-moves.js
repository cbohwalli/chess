import getHorizontalLeftMoves from "../helper-functions/moves/get-horizontal-left-moves.js";
import getHorizontalRightMoves from "../helper-functions/moves/get-horizontal-right-moves.js";
import getVerticalDownMoves from "../helper-functions/moves/get-vertical-down-moves.js";
import getVerticalUpMoves from "../helper-functions/moves/get-vertical-up-moves.js";
import getUpperRightDiagonalCells from "../helper-functions/moves/get-upper-right-diagonal-cells.js";
import getUpperLeftDiagonalCells from "../helper-functions/moves/get-upper-left-diagonal-cells.js";
import getLowerRightDiagonalCells from "../helper-functions/moves/get-lower-right-diagonal-cells.js";
import getLowerLeftDiagonalCells from "../helper-functions/moves/get-lower-left-diagonal-cells.js";
import isPieceNotInGameState from "../helper-functions/is-piece-not-in-game-state.js";

export default function getQueenMoves(color, cell, gameState, id) {
    let queenMoves = [];
    const queenLeftMoves = getHorizontalLeftMoves(color, cell, gameState);
    const queenRightMoves = getHorizontalRightMoves(color, cell, gameState);
    const queenUpperMoves = getVerticalUpMoves(color, cell, gameState);
    const queenLowerMoves = getVerticalDownMoves(color, cell, gameState);
    const upperRightDiagonalCells = getUpperRightDiagonalCells(color, cell, gameState);
    const upperLeftDiagonalCells = getUpperLeftDiagonalCells(color, cell, gameState);
    const lowerRightDiagonalCells = getLowerRightDiagonalCells(color, cell, gameState);
    const lowerLeftDiagonalCells = getLowerLeftDiagonalCells(color, cell, gameState);

    if (isPieceNotInGameState(gameState, id)) {
        return [];
    }

    queenMoves.push(...upperRightDiagonalCells);
    queenMoves.push(...upperLeftDiagonalCells);
    queenMoves.push(...lowerRightDiagonalCells);
    queenMoves.push(...lowerLeftDiagonalCells);
    queenMoves.push(...queenLeftMoves);
    queenMoves.push(...queenRightMoves);
    queenMoves.push(...queenUpperMoves);
    queenMoves.push(...queenLowerMoves);

    return queenMoves; // array of valid knight moves
}