import getOpponentsColor from "../../../../pieces/helper-functions/get-opponents-color.js";
import getOneSidesPieces from "./get-one-sides-pieces.js";
import checkOpponentChecked from "./check-opponent-Checked.js";

export default function checkOpponentCheckmate(gameState, colorOfPlayer) {
    const opponentColor = getOpponentsColor(colorOfPlayer);
    const opponentPieces = getOneSidesPieces(gameState.getGameState(), opponentColor);
    const orginGameState = JSON.parse(JSON.stringify(gameState.getGameState()));
    let isNotChecked = false;

    for (let i = 0; i < opponentPieces.length; i++) {
  
      if(isNotChecked) {
        return false;
      }
  
      const pieceMoves = opponentPieces[i].getMoves(gameState.getGameState());
      const pieceCell = opponentPieces[i].getCell();
  
      for (let j = 0; j < pieceMoves.length; j++) {

        gameState.changeGameState(pieceCell, pieceMoves[j], opponentPieces[i].getId());

        if (!checkOpponentChecked(gameState.getGameState(), colorOfPlayer)) {
          isNotChecked = true;
        }

        const newGameState = JSON.parse(JSON.stringify(orginGameState));
        gameState.setNewGameState(newGameState);
      }  
    }

    

    return true;
}