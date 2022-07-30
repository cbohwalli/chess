import drag from "./add-drag-and-drop-listeners-modules/drag.js";
import allowDrop from "./add-drag-and-drop-listeners-modules/allow-drop.js";
import drop from "./add-drag-and-drop-listeners-modules/drop.js";

export default function addDragAndDropListeners() {
  document.querySelectorAll('.chessPiece').forEach(item => item.addEventListener(
    'dragstart', (e) => {drag(e); }
  ));

  document.querySelectorAll('.cell').forEach(item => item.addEventListener(
    'dragover', (e) => { allowDrop(e); }
  ));

  document.querySelectorAll('.cell').forEach(item => item.addEventListener(
    'drop', (e) => { drop(e); }
  ));
}