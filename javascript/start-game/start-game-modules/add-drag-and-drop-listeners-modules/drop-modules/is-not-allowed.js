import getPieceByType from "../../../../game-state/game-state-modules/get-piece.js";
import getOpponentsColor from "../../../../pieces/helper-functions/get-opponents-color.js";
import getOneSidesPieces from "./get-one-sides-pieces.js";
import getOneSidesMoves from "./get-one-sides-moves.js";
import isCellAttacked from "./is-cell-attacked.js";
import getKingPosition from "./get-king-position.js";
import { hasBlackKingMoved, hasWhiteKingMoved } from "../../../../globals.js";

export default function isNotAllowed(gameState, dropCell, previousCell) {
    const pieceId = gameState.getGameState()[previousCell];
    const typeOfPiece = pieceId.substring(5,9);
    const colorOfPlayer = pieceId.substring(0,5);
    const piece = getPieceByType(typeOfPiece, colorOfPlayer, pieceId, previousCell);
    const moves = piece.getMoves(gameState.getGameState());
    const colorOfOpponent = getOpponentsColor(colorOfPlayer);

    if (typeOfPiece === "King" && colorOfPlayer === "white" && !hasWhiteKingMoved) {
        if (dropCell === "C1") {
            const opponentsPieces = getOneSidesPieces(gameState.getGameState(), colorOfOpponent);
            const opponentsMoves = getOneSidesMoves(opponentsPieces, gameState.getGameState());
            if (isCellAttacked(opponentsMoves, "D1")) {
                return true;
            }
        }

        if (dropCell === "G1") {
            const opponentsPieces = getOneSidesPieces(gameState.getGameState(), colorOfOpponent);
            const opponentsMoves = getOneSidesMoves(opponentsPieces, gameState.getGameState());
            if (isCellAttacked(opponentsMoves, "F1")) {
                return true;
            }
        }
    }

    if (typeOfPiece === "King" && colorOfPlayer === "black" && !hasBlackKingMoved) {
        if (dropCell === "C8") {
            const opponentsPieces = getOneSidesPieces(gameState.getGameState(), colorOfOpponent);
            const opponentsMoves = getOneSidesMoves(opponentsPieces, gameState.getGameState());
            if (isCellAttacked(opponentsMoves, "D8")) {
                return true;
            }
        }

        if (dropCell === "G8") {
            const opponentsPieces = getOneSidesPieces(gameState.getGameState(), colorOfOpponent);
            const opponentsMoves = getOneSidesMoves(opponentsPieces, gameState.getGameState());
            if (isCellAttacked(opponentsMoves, "F8")) {
                return true;
            }
        }
    }
      
    for (let i = 0; i < moves.length; i++) {
        if(moves[i] === dropCell) {
            return validateGameState(gameState, dropCell, pieceId, previousCell, colorOfPlayer, colorOfOpponent); // returns false if game state is valid true otherwise
        }
    }
    
    return true;    
}

function validateGameState(gameState, dropCell, pieceId, previousCell, colorOfPlayer, colorOfOpponent) {
    const oldGameState = JSON.parse(JSON.stringify(gameState.getGameState()));

    gameState.changeGameState(previousCell, dropCell, pieceId);

    const opponentsPieces = getOneSidesPieces(gameState.getGameState(), colorOfOpponent);
    const opponentsMoves = getOneSidesMoves(opponentsPieces, gameState.getGameState());
    const playersKingPosition = getKingPosition(gameState.getGameState(), colorOfPlayer)
    const isPlayerChecked = isCellAttacked(opponentsMoves, playersKingPosition);
    
    gameState.setNewGameState(oldGameState);
    return isPlayerChecked;
}

