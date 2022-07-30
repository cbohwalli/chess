export default function getOneSidesMoves(pieces, gameState) {
    let moves = [];

    for (let i = 0; i < pieces.length; i++) {
        moves.push(...pieces[i].getMoves(gameState));
    }

    return moves;
}