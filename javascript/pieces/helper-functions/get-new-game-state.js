export default function getNewGameState(oldCell, newCell) {
    // assumes there is a piece on oldCell and parameters are strings, example: "A1"
    
    let newGameState = {...gameState};
    const piece = newGameState[oldCell].getPiece();

    newGameState[oldCell].setPiece(null);
    newGameState[newCell].setPiece(piece);

    return newGameState;
}

