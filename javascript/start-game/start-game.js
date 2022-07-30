import { row1 } from "./start-game-modules/row-1.js";
import { row2 } from "./start-game-modules/row-2.js";
import { row3 } from "./start-game-modules/row-3.js";
import { row4 } from "./start-game-modules/row-4.js";
import { row5 } from "./start-game-modules/row-5.js";
import { row6 } from "./start-game-modules/row-6.js";
import { row7 } from "./start-game-modules/row-7.js";
import { row8 } from "./start-game-modules/row-8.js";
import addDragAndDropListeners from "./start-game-modules/add-drag-and-drop-listeners.js";

export default function startGame() {
  const startContainer = document.getElementById('startContainer');

  if (startContainer !== null) {
    document.getElementById('startContainer').remove();
  }
  
  document.getElementById('main').innerHTML = getChessBoard();
  addDragAndDropListeners();
}

function getChessBoard() {
  return `
    <div class="chessBoard">
      ${row8}
      ${row7}
      ${row6}
      ${row5}
      ${row4}
      ${row3}
      ${row2}
      ${row1}
    </div>
  `;
}