import convertLetterToNumber from "../convert-letter-to-number.js";
import convertNumberToLetter from "../convert-number-to-letter.js";
import isPieceOnCellDifferentColor from "../is-piece-on-cell-different-color.js";
import isPieceOnCellSameColor from "../is-piece-on-cell-same-color.js";

export default function getUpperLeftDiagonalCells(color, cell, gameState) {
    let allowedCells = [];

    for (let i = 1; i <= 8; i++) {
        let newCell = getUpperLeftDiagonal(cell, i);

        if(newCell === null || newCell === undefined) {
            break;
        }

        if(isPieceOnCellDifferentColor(newCell, color, gameState)) {
            allowedCells.push(newCell);
            break;
        }

        if(isPieceOnCellSameColor(newCell, color, gameState)){
            break;
        }

        allowedCells.push(newCell);
    }

    return allowedCells;
}

function getUpperLeftDiagonal(cell, iteration) {
    // parameter cell is a string in the format "A1"
    const columnAsNumber = convertLetterToNumber(cell.substring(0,1));
    const row = parseInt(cell.substring(1,2));
    const newColumn = convertNumberToLetter(columnAsNumber - iteration);
    const newRow = row + iteration;

    if(newColumn == null) {
        return null;
    }

    if(newRow > 8) {
        return null;
    }
    
    return newColumn + newRow;
}