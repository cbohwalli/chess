export default function isPieceOnCellSameColor(cell, color, gameState) {
    if(gameState[cell] === null || gameState[cell] === undefined) {
        return false;
    }

    if(gameState[cell].substring(0,5) === color) {
        return true;
    }

    return false;
}