import getOpponentsColor from "../../pieces/helper-functions/get-opponents-color.js";
import { gameState } from "../game-state.js";
import getPieceByType from "./get-piece.js";

export default function getOpponentsMoves(gameStateCells, colorOfPlayer) {
    let piecesMoves = [];
    let opponentsIds = [];
    const opponentsColor = getOpponentsColor(colorOfPlayer);

    for (const cell in gameStateCells) {
        const pieceOnCell = gameStateCells[cell];

        if (pieceOnCell == null) {
            continue;
        }

        const colorOfPiece = pieceOnCell.substring(0,5);

        if (colorOfPiece !== colorOfPlayer && colorOfPiece !== null) {
            opponentsIds.push(pieceOnCell);
        }
    }

    for (let i = 0; i < opponentsIds.length; i++) {
        const typeOfPiece = opponentsIds[i].substring(5,9);
        const cell = Object.keys(gameStateCells).find(cell => gameStateCells[cell] === opponentsIds[i]);
        const piece = getPieceByType(typeOfPiece, opponentsColor, opponentsIds[i], cell);
    }

    
    return piecesMoves;
}