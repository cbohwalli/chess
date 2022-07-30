export default function chooseNewPiece(color) {
    if (color === "white") {
      document.getElementById("queen").classList.add("newWhiteQueen");
      document.getElementById("rook").classList.add("newWhiteRook");
      document.getElementById("knight").classList.add("newWhiteKnight");
      document.getElementById("bishop").classList.add("newWhiteBishop");
    } else {
      document.getElementById("queen").classList.add("newBlackQueen");
      document.getElementById("rook").classList.add("newBlackRook");
      document.getElementById("knight").classList.add("newBlackKnight");
      document.getElementById("bishop").classList.add("newBlackBishop");
    }
  
    document.getElementById("chooseNewPieceContainer").style.display = "initial";
  }