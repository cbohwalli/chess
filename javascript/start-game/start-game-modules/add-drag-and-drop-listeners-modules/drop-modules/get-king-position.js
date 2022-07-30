export default function getKingPosition(gameState, color) {
    for (const cell in gameState) {
        const pieceIdOrNull = gameState[cell];

        if (pieceIdOrNull === null) {
            continue;
        }

        if (pieceIdOrNull.substring(0,5) === color && pieceIdOrNull.substring(5,9) === "King") {
            return cell;
        }
    }
}