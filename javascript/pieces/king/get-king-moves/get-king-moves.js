import getKingPattern from "./get-king-pattern.js";
import removeInvalidCells from "../../helper-functions/remove-invalid-cells.js";
import { hasWhiteKingMoved, hasWhiteRook1Moved, hasWhiteRook2Moved, hasBlackKingMoved, hasBlackRook1Moved, hasBlackRook2Moved } from "../../../globals.js";
import { gameState } from "../../../game-state/game-state.js";

export default function getKingMoves(color, cell, gameStateObj) {
    const kingPattern = getKingPattern(cell, gameStateObj);
    const kingMoves = removeInvalidCells(kingPattern, gameStateObj, color);
    kingMoves.push(...getCastleMoves(gameStateObj, color));
    return kingMoves; // array of valid king moves
}

function getCastleMoves(gameStateObj, color) {
    let castleMoves = [];

    if (color === "white") {
        if (hasWhiteKingMoved || gameState.getKingChecked === color) {
            return [];
        }

        if (!hasWhiteRook1Moved && gameStateObj["B1"] === null && gameStateObj["C1"] === null && gameStateObj["D1"] === null) {
            castleMoves.push("C1");
        }

        if (!hasWhiteRook2Moved && gameStateObj["F1"] === null && gameStateObj["G1"] === null) {
            castleMoves.push("G1");
        }
    } else {
        if (hasBlackKingMoved || gameState.getKingChecked === color) {
            return [];
        }
        
        if (!hasBlackRook1Moved && gameStateObj["B8"] === null && gameStateObj["C8"] === null && gameStateObj["D8"] === null) {
            castleMoves.push("C8");
        }

        if (!hasBlackRook2Moved && gameStateObj["F8"] === null && gameStateObj["G8"] === null) {
            castleMoves.push("G8");
        }
    }
    return castleMoves;
}