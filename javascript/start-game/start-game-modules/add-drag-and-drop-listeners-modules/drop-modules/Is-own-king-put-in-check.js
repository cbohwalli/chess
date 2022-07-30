export default function IsOwnKingPutInCheck(gameState, colorOfPlayer, previousCell, currentCell, piece) {
    const previousGameState = {...gameState.getGameStateCells()}; 
    
    gameState.setNewGameStateCells(previousCell, currentCell, piece);
    
    const newGameState = gameState.getGameStateCells();
    const ownKingCell = gameState.getOwnSidesKingCell(colorOfPlayer, newGameState);
    const oppositeSidesMoves = gameState.getOppositeSidesMoves(colorOfPlayer, newGameState);

    for (let i = 0; i < oppositeSidesMoves.length; i++) {
        if (ownKingCell === oppositeSidesMoves[i]) {
            gameState.restorePreviousGameStateCells(previousGameState);
            return true;
        }
    }

    return false;
}