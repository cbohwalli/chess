export default function isPieceNotInGameState(gameState, id) {
    for (const cell in gameState) {
        if (gameState[cell] === id) {
            return false;
        }
    }
    return true;
}