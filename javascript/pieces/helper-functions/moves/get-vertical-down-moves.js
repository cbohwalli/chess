import isPieceOnCellDifferentColor from "../is-piece-on-cell-different-color.js";
import isPieceOnCellSameColor from "../is-piece-on-cell-same-color.js";

export default function getVerticalDownMoves(color, cell, gameState) {
    let allowedCells = [];

    for (let i = -1; i > -8; i--) {
        let verticalCell = getNewVerticalDownCell(cell, i);

        if (i === 0) {
            continue;
        }

        if(gameState[verticalCell] === undefined) {
            break;
        }
        
        if(isPieceOnCellDifferentColor(verticalCell, color, gameState)) {
            allowedCells.push(verticalCell);
            break;
        }

        if(isPieceOnCellSameColor(verticalCell, color, gameState)){
            break;
        }

        allowedCells.push(verticalCell);
    }

    return allowedCells;
}

function getNewVerticalDownCell(cell, iteration) {
    // parameter cell is a string in the format "A1"
    const column = cell.substring(0,1);
    const row = parseInt(cell.substring(1,2));
    const newRow = row + iteration;

    if(newRow < 1) {
        return null;
    }
    
    return column + newRow;
}