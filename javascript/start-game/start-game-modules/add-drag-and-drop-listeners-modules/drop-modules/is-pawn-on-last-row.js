export default function isPawnOnLastRow(pieceId, colorOfPlayer, dropCell) {
    const piece = pieceId.substring(5,9);
  
    if (piece !== "Pawn") {
      return false;
    }
  
    if ((colorOfPlayer === "white" && dropCell.substring(1,2) === "8") || (colorOfPlayer === "black" && dropCell.substring(1,2) === "1")) {
      return true;
    }
  
    return false;
  }