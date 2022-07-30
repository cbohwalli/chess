export default function isPieceDifferentColor(piece, colorOfPlayer) {
    if(piece.getColor() === getOpponentsColor(colorOfPlayer)) {
        return true;
    }
}