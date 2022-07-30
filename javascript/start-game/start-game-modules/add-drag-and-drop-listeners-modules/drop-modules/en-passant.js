import { getCellDown, getCellUp } from "../../../../pieces/helper-functions/get-cell.js";

export function isEnPassantMove(pieceId, dropCell, gameState, previousCell) {
 
    if (pieceId.substring(5,9) === "Pawn" && gameState[dropCell] === null && dropCell.substring(0,1) !== previousCell.substring(0,1)) {
      return true;
    }
  
    return false;
  }
  
export function removeEnPassantPiece(dropCell, previousCell, gameState, color) {

    if (color === "white") {
        const cellDownHtml = "cell" + getCellDown(dropCell);
        document.getElementById(cellDownHtml).children[0].remove(); // remove captured enPassantPiece html element
        gameState.changeGameState(previousCell, getCellDown(dropCell), null); // remove captured enPassantPiece from GameState
    } else {
        const cellUpHtml = "cell" + getCellUp(dropCell);
        document.getElementById(cellUpHtml).children[0].remove();
        gameState.changeGameState(previousCell, getCellUp(dropCell), null); 
    }    
}
  
export function enPassantConditions(previousCell, dropCell, pieceId) {
    const colorOfPlayer = pieceId.substring(0,5);
  
    if (colorOfPlayer === "white" && previousCell.substring(1,2) === "2" && dropCell.substring(1,2) === "4") {
        return true;
    }
    if (colorOfPlayer === "black" && previousCell.substring(1,2) === "7" && dropCell.substring(1,2) === "5") {
        return true;
    }
    return false;
}