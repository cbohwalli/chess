export default function getOwnKingCell(colorOfPlayer, gameStateCells) {
    for (const cell in gameStateCells) {
        if (gameStateCells[cell] === null) {
            continue;
        } 

        if (gameStateCells[cell].substring(0,5) === colorOfPlayer && gameStateCells[cell].substring(5,9) === "King") {
            return cell;
        }
    }
}