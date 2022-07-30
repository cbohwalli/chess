import convertLetterToNumber from "../convert-letter-to-number.js";
import convertNumberToLetter from "../convert-number-to-letter.js";
import isPieceOnCellDifferentColor from "../is-piece-on-cell-different-color.js";
import isPieceOnCellSameColor from "../is-piece-on-cell-same-color.js";

export default function getHorizontalLeftMoves(color, cell, gameState) {
    let allowedCells = [];

    for (let i = -1; i > -8; i--) {
        let horizontalCell = getNewLeftCell(cell, i);

        if (i === 0) {
            continue;
        }

        if(horizontalCell === null || horizontalCell === undefined) {
            break;
        }
        
        if(isPieceOnCellDifferentColor(horizontalCell, color, gameState)) {
            allowedCells.push(horizontalCell);
            break;
        }

        if(isPieceOnCellSameColor(horizontalCell, color, gameState)){
            break;
        }

        allowedCells.push(horizontalCell);
    }

    return allowedCells;
}

function getNewLeftCell(cell, iteration) {
    // parameter cell is a string in the format "A1"
    const columnAsNumber = convertLetterToNumber(cell.substring(0,1));
    const row = parseInt(cell.substring(1,2));
    const newColumn = convertNumberToLetter(columnAsNumber + iteration);

    if(newColumn == null) {
        return null;
    }

    return newColumn + row;
}