export default function getValidPieceMoves(pieceMoves, pieceId, gameState, previousCell, colorOfPlayer) {

    let validMoves = []; 
    const previousGameState = {...gameState.getGameStateCells()};

    for (let i = 0; i < pieceMoves.length; i++) {
        const newCell = pieceMoves[i];
        gameState.setNewGameStateCells(previousCell, newCell, pieceId);
        const newGameState = gameState.getGameStateCells(); 
        const oppositeSidesMoves = gameState.getOppositeSidesMoves(colorOfPlayer, newGameState);
        const ownKingCell = gameState.getOwnSidesKingCell(colorOfPlayer, newGameState);
        let isOwnKingNotChecked = true;

        for (let i = 0; i < oppositeSidesMoves.length; i++) {
            if (ownKingCell === oppositeSidesMoves[i]) {
                isOwnKingChecked = false;
            }
        }

        if (isOwnKingNotChecked) {
            validMoves.push(newCell);
        }

        gameState.restorePreviousGameStateCells(previousGameState);
    }

    return validMoves;
}