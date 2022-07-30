export default function isAnotherPieceOnCell(cell) {
    if(cell.children.length > 0) {
        return true;
    }

    return false;
}