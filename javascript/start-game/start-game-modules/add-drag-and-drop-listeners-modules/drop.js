import getDropCell from "./drop-modules/get-drop-cell.js";
import isNotAllowed from "./drop-modules/is-not-allowed.js";
import { gameState } from "../../../game-state/game-state.js";
import getPreviousCell from "./drop-modules/get-previous-cell.js";
import isAnotherPieceOnCell from "./drop-modules/is-another-piece-on-cell.js";
import removePiece from "./drop-modules/remove-piece.js";
import checkOpponentChecked from "./drop-modules/check-opponent-Checked.js";
import checkOpponentCheckmate from "./drop-modules/check-opponent-checkmate.js";
import { enPassantConditions, isEnPassantMove, removeEnPassantPiece } from "./drop-modules/en-passant.js";
import newPieceListener from "../../../event-listeners/new-piece-listener.js";
import getOpponentsColor from "../../../pieces/helper-functions/get-opponents-color.js";
import castleAdjusments from "./drop-modules/castle-adjusments.js";
import chooseNewPiece from "./drop-modules/choose-new-piece.js";
import isPawnOnLastRow from "./drop-modules/is-pawn-on-last-row.js";

export default function drop(e) {

  const pieceId = e.dataTransfer.getData("text");
  const pieceHtml = document.getElementById(pieceId);
  const dropCellHtml = getDropCell(e.target);
  const previousCell = getPreviousCell(pieceHtml);
  const dropCell = dropCellHtml.id.substring(4,6);
  const colorOfPlayer = pieceId.substring(0,5);
  const turn = gameState.getTurn();
 
  if (colorOfPlayer !== turn) {
    return;
  }

  if (isNotAllowed(gameState, dropCell, previousCell)) {
    return;
  }

  if (isAnotherPieceOnCell(dropCellHtml)) {
    removePiece(dropCellHtml);
  }

  if (isEnPassantMove(pieceId, dropCell, gameState.getGameState(), previousCell)) {
    removeEnPassantPiece(dropCell, previousCell, gameState, colorOfPlayer);
  }

  e.preventDefault();  
  dropCellHtml.appendChild(pieceHtml);

  gameState.changeGameState(previousCell, dropCell, pieceId);

  if (isPawnOnLastRow(pieceId, colorOfPlayer, dropCell)) {
    chooseNewPiece(colorOfPlayer);
    newPieceListener(colorOfPlayer, gameState, dropCell);
  }

  if (enPassantConditions(previousCell, dropCell, pieceId)) {
    gameState.setEnPassant(pieceId);
  } else {
    gameState.setEnPassant(null);
  }

  const isOpponentChecked = checkOpponentChecked(gameState.getGameState(), colorOfPlayer);
  const isOpponentCheckmated = checkOpponentCheckmate(gameState, colorOfPlayer);

  if (isOpponentCheckmated) {
    document.getElementById("winContainer").style.display = "initial";
    document.getElementById("winText").innerHTML = colorOfPlayer + " won!";
    return;
  }

  if (isOpponentChecked) {
    setTimeout(function() {
      const opponentColor = getOpponentsColor(colorOfPlayer);
      gameState.setKingChecked(opponentColor)
      alert("Check");
    }, 200);
  } else {
    gameState.setKingChecked(null);
  }

  if (pieceId.substring(5,9) === "King") {
    castleAdjusments(previousCell, dropCell); // only adjusts if valid castle move
  }
  
  gameState.changeTurn();
}