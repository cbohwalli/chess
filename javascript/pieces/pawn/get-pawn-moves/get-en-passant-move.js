import { gameState } from "../../../game-state/game-state.js";
import { getCellDown, getCellUp, getCellLeft, getCellRight } from "../../helper-functions/get-cell.js";

export default function getEnPassantMove(id) {
    const enPassantCondition = gameState.getEnPassant();
    if (enPassantCondition === null) {
        return [];
    }

    const colorOfEnPassantPiece = enPassantCondition.substring(0,5);
    const gameStateObject = gameState.getGameState();
    const cellEnPassantPiece = Object.keys(gameStateObject).find(cell => gameStateObject[cell] === enPassantCondition);

    if (cellEnPassantPiece === null || cellEnPassantPiece === undefined) {
        return [];
    }

    const cellRight = getCellRight(cellEnPassantPiece);
    const cellLeft = getCellLeft(cellEnPassantPiece);

    if (id !== gameStateObject[cellRight] && id !== gameStateObject[cellLeft]) {
        return [];
    }

    if (cellRight !== null && gameStateObject[cellRight] !== null) {
        if (gameStateObject[cellRight].substring(0,5) !== colorOfEnPassantPiece && gameStateObject[cellRight].substring(5,9) === "Pawn") {
            return [enPassantMove(cellEnPassantPiece, colorOfEnPassantPiece)];
        }
    }

    if (cellLeft !== null && gameStateObject[cellLeft] !== null) {
        if (gameStateObject[cellLeft].substring(0,5) !== colorOfEnPassantPiece && gameStateObject[cellLeft].substring(5,9) === "Pawn") {
            return [enPassantMove(cellEnPassantPiece, colorOfEnPassantPiece)];
        }
    }

    return [];
}

function enPassantMove(cellEnPassantPiece, colorOfEnPassantPiece) {
    // return the cell where capturing pawn can move to
    if (colorOfEnPassantPiece === "white") {
        return getCellDown(cellEnPassantPiece);
    }
    return getCellUp(cellEnPassantPiece);
}