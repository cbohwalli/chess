export default function getPreviousCell(piece) {
    const previousCell = piece.parentNode.id.substring(4,6);
    return previousCell;
}