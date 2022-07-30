import getHorizontalLeftMoves from "../helper-functions/moves/get-horizontal-left-moves.js";
import getHorizontalRightMoves from "../helper-functions/moves/get-horizontal-right-moves.js";
import getVerticalDownMoves from "../helper-functions/moves/get-vertical-down-moves.js";
import getVerticalUpMoves from "../helper-functions/moves/get-vertical-up-moves.js";
import isPieceNotInGameState from "../helper-functions/is-piece-not-in-game-state.js";

export default function getRookMoves(color, cell, gameState, id) {
    let rookMoves = [];
    const rookLeftMoves = getHorizontalLeftMoves(color, cell, gameState);
    const rookRightMoves = getHorizontalRightMoves(color, cell, gameState);
    const rookUpperMoves = getVerticalUpMoves(color, cell, gameState);
    const rookLowerMoves = getVerticalDownMoves(color, cell, gameState);

    if (isPieceNotInGameState(gameState, id)) {
        return [];
    }

    rookMoves.push(...rookLeftMoves);
    rookMoves.push(...rookRightMoves);
    rookMoves.push(...rookUpperMoves);
    rookMoves.push(...rookLowerMoves);
    
    return rookMoves; // array of valid knight moves
}