export default function isCellAttacked(opponentsMoves, cell) {
    for (let i = 0; i < opponentsMoves.length; i++) {
        if (cell === opponentsMoves[i]) {
            return true; 
        }        
    }
    return false;
}