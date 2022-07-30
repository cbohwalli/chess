export default function getOpponentsKingCell(gameStatePieces, colorOfPlayer) {
    
    for (const cell in gameStatePieces) {
        let piece = gameStatePieces[cell];

        if (piece === null) {
            continue;
        }

        let pieceColor = piece.getColor();
        let typeOfPiece = piece.getId().substring(5,9);

        if (pieceColor !== colorOfPlayer && typeOfPiece === "King") {
            return cell;
        }
    }
}