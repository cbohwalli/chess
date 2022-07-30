export default function removeInvalidCells(movePattern, gameState, color) {
    let validMoves = []

    for (let i = 0; i < movePattern.length; i++) {
        let cellValue = gameState[movePattern[i]];
        let colorOnCell = "";
        let shouldAddToValidMoves = true;

        if(cellValue !== null) {
            colorOnCell = cellValue.substring(0,5);
            shouldAddToValidMoves = !(color===colorOnCell);
        }

        if(shouldAddToValidMoves) {
            validMoves.push(movePattern[i]);
        }
    }

    return validMoves;
}