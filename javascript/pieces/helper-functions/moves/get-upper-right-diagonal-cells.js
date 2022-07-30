import convertLetterToNumber from "../convert-letter-to-number.js";
import convertNumberToLetter from "../convert-number-to-letter.js";
import isPieceOnCellDifferentColor from "../is-piece-on-cell-different-color.js";
import isPieceOnCellSameColor from "../is-piece-on-cell-same-color.js";

export default function getUpperRightDiagonalCells(color, cell, gameState) {
    let allowedCells = [];

    for (let i = 1; i <= 8; i++) {
        let newCell = getUpperRightDiagonal(cell, i);

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

function getUpperRightDiagonal(cell, iteration) {
    // parameter cell is a string in the format "A1"
    const columnAsNumber = convertLetterToNumber(cell.substring(0,1));
    const row = parseInt(cell.substring(1,2));
    const newColumn = convertNumberToLetter(columnAsNumber + iteration);
    const newRow = row + iteration;

    if(newColumn == null) {
        return;
    }

    if(newRow > 8) {
        return;
    }
    
    return newColumn + newRow;
}