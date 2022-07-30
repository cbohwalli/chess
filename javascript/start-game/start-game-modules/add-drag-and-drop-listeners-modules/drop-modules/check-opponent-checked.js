import getOneSidesPieces from "./get-one-sides-pieces.js";
import getOneSidesMoves from "./get-one-sides-moves.js";
import isCellAttacked from "./is-cell-attacked.js";
import getKingPosition from "./get-king-position.js";
import getOpponentsColor from "../../../../pieces/helper-functions/get-opponents-color.js";

export default function checkOpponentChecked(gameState, colorOfPlayer) {
    const opponentColor = getOpponentsColor(colorOfPlayer);
    const playersPieces = getOneSidesPieces(gameState, colorOfPlayer);
    const playerMoves = getOneSidesMoves(playersPieces, gameState);
    const OpponentsKingPosition = getKingPosition(gameState, opponentColor);
  
    return isCellAttacked(playerMoves, OpponentsKingPosition);
}