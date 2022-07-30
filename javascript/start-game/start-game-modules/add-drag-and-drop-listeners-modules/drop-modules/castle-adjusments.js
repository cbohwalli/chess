export default function castleAdjusments(previousCell, dropCell) {
    if (previousCell === "E1" && dropCell === "C1") {
      gameState.changeGameState("A1", "D1", "whiteRook1");
      document.getElementById("cellD1").appendChild(document.getElementById("whiteRook1"));
    }
  
    if (previousCell === "E1" && dropCell === "G1") {
      gameState.changeGameState("H1", "F1", "whiteRook2");
      document.getElementById("cellF1").appendChild(document.getElementById("whiteRook2"));
    }
  
    if (previousCell === "E8" && dropCell === "C8") {
      gameState.changeGameState("A8", "D8", "blackRook1");
      document.getElementById("cellD8").appendChild(document.getElementById("blackRook1"));
    }
  
    if (previousCell === "E8" && dropCell === "G8") {
      gameState.changeGameState("H8", "F8", "blackRook2");
      document.getElementById("cellF8").appendChild(document.getElementById("blackRook2"));
    }
  }