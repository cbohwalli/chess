import getPieceByType from "../../../../game-state/game-state-modules/get-piece.js";

export default function getOneSidesPieces(gameState, color) {
    let pieces = [];

    for (const cell in gameState) {
        const pieceIdOrNull = gameState[cell];

        if (pieceIdOrNull === null) {
            continue;
        }

        if (pieceIdOrNull.substring(0,5) === color) {
            const typeOfPiece = pieceIdOrNull.substring(5,9);
            const piece = getPieceByType(typeOfPiece, color, pieceIdOrNull, cell);
            pieces.push(piece);
        }
    }

    return pieces;
}