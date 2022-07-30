import convertLetterToNumber from "../../helper-functions/convert-letter-to-number.js";
import convertNumberToLetter from "../../helper-functions/convert-number-to-letter.js";

export default function getCaptureMoves(cell, gameState, color) {
    const row = parseInt(cell.substring(1,2));
    const diagonalRow = (color === "white" ? row + 1 : row - 1);
    const columnAsNumber = convertLetterToNumber(cell.substring(0,1));
    let captureMoves = [];

    captureMoves.push(...getLeftCaptureMove(columnAsNumber, gameState, diagonalRow, color));
    captureMoves.push(...getRightCaptureMove(columnAsNumber, gameState, diagonalRow, color));
    
    return captureMoves;
}

function getLeftCaptureMove(columnAsNumber, gameState, diagonalRow, color) {
    const leftDiagonalColumn = convertNumberToLetter(columnAsNumber - 1); 
    const leftDiagonalCell = leftDiagonalColumn + diagonalRow;

    if (gameState[leftDiagonalCell] === null || gameState[leftDiagonalCell] === undefined) {
        return [];
    }

    if (gameState[leftDiagonalCell].substring(0,5) !== color) {
        return [leftDiagonalCell];
    }

    return [];  
}

function getRightCaptureMove(columnAsNumber, gameState, diagonalRow, color) {
    const rightDiagonalColumn = convertNumberToLetter(columnAsNumber + 1); 
    const rightDiagonalCell = rightDiagonalColumn + diagonalRow;

    if (gameState[rightDiagonalCell] === null || gameState[rightDiagonalCell] === undefined) {
        return [];
    }

    if (gameState[rightDiagonalCell].substring(0,5) !== color) {
        return [rightDiagonalCell];
    }

    return [];  
}