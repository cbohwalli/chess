export let newPieceNumber = 3;
export let currentDropCell = null;
export let hasWhiteKingMoved = false;
export let hasWhiteRook1Moved = false;
export let hasWhiteRook2Moved = false;
export let hasBlackKingMoved = false;
export let hasBlackRook1Moved = false;
export let hasBlackRook2Moved = false;

export function increaseNewPieceNumber() {
    newPieceNumber += 1;
}

export function changeCurrentDropCell(dropCell) {
    currentDropCell = dropCell;
}

export function whiteKingMoved() {
    hasWhiteKingMoved = true;
}

export function whiteRook1Moved() {
    hasWhiteRook1Moved = true;
}

export function whiteRook2Moved() {
    hasWhiteRook2Moved = true;
}

export function blackKingMoved() {
    hasBlackKingMoved = true;
}

export function blackRook1Moved() {
    hasBlackRook1Moved = true;
}

export function blackRook2Moved() {
    hasBlackRook2Moved = true;
}