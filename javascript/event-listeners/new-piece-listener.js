import { newPieceNumber, increaseNewPieceNumber, currentDropCell, changeCurrentDropCell } from "../globals.js";
import drag from "../start-game/start-game-modules/add-drag-and-drop-listeners-modules/drag.js";

export default function newPieceListener(color, gameState, dropCell) {
    const newPieces = document.querySelectorAll(".newPiece");
    changeCurrentDropCell(dropCell);

    for (let i = 0; i < newPieces.length; i++) {
        newPieces[i].addEventListener("click", () => {
            newPieceHandler(color)
        }, {once: true});
    }

    document.getElementById("queen").addEventListener("click", () => {
        if (dropCell !== currentDropCell) {
            return;
        }

        if (color === "white") {
            gameState.changeGameState(dropCell, dropCell, "whiteQueen" + newPieceNumber);
            document.getElementById("cell" + dropCell).innerHTML = `<div draggable="true" id="whiteQueen${newPieceNumber}" class="chessPiece chessPiece--whiteQueen"></div>`;
            document.getElementById("whiteQueen" + newPieceNumber).addEventListener('dragstart', (e) => {drag(e); });
            increaseNewPieceNumber();
        } else {
            gameState.changeGameState(dropCell, dropCell, "blackQueen" + newPieceNumber);
            document.getElementById("cell" + dropCell).innerHTML = `<div draggable="true" id="blackQueen${newPieceNumber}" class="chessPiece chessPiece--blackQueen"></div>`;
            document.getElementById("blackQueen" + newPieceNumber).addEventListener('dragstart', (e) => {drag(e); });
            increaseNewPieceNumber();
        }
    }, {once: true});

    document.getElementById("rook").addEventListener("click", () => {
        if (dropCell !== currentDropCell) {
            return;
        }

        if (color === "white") {
            gameState.changeGameState(dropCell, dropCell, "whiteRook" + newPieceNumber);
            document.getElementById("cell" + dropCell).innerHTML = `<div draggable="true" id="whiteRook${newPieceNumber}" class="chessPiece chessPiece--whiteRook"></div>`;
            document.getElementById("whiteRook" + newPieceNumber).addEventListener('dragstart', (e) => {drag(e); });
            increaseNewPieceNumber();
        } else {
            gameState.changeGameState(dropCell, dropCell, "blackRook" + newPieceNumber);
            document.getElementById("cell" + dropCell).innerHTML = `<div draggable="true" id="blackRook${newPieceNumber}" class="chessPiece chessPiece--blackRook"></div>`;
            document.getElementById("blackRook" + newPieceNumber).addEventListener('dragstart', (e) => {drag(e); });
            increaseNewPieceNumber();
        }
    }, {once: true});

    document.getElementById("knight").addEventListener("click", () => {
        if (dropCell !== currentDropCell) {
            return;
        }

        if (color === "white") {
            gameState.changeGameState(dropCell, dropCell, "whiteKnight" + newPieceNumber);
            document.getElementById("cell" + dropCell).innerHTML = `<div draggable="true" id="whiteKnight${newPieceNumber}" class="chessPiece chessPiece--whiteKnight"></div>`;
            document.getElementById("whiteKnight" + newPieceNumber).addEventListener('dragstart', (e) => {drag(e); });
            increaseNewPieceNumber();
        } else {
            gameState.changeGameState(dropCell, dropCell, "blackKnight" + newPieceNumber);
            document.getElementById("cell" + dropCell).innerHTML = `<div draggable="true" id="blackKnight${newPieceNumber}" class="chessPiece chessPiece--blackKnight"></div>`;
            document.getElementById("blackKnight" + newPieceNumber).addEventListener('dragstart', (e) => {drag(e); });
            increaseNewPieceNumber();
        }
    }, {once: true});

    document.getElementById("bishop").addEventListener("click", () => {
        if (dropCell !== currentDropCell) {
            return;
        }

        if (color === "white") {
            gameState.changeGameState(dropCell, dropCell, "whiteBishop" + newPieceNumber);
            document.getElementById("cell" + dropCell).innerHTML = `<div draggable="true" id="whiteBishop${newPieceNumber}" class="chessPiece chessPiece--whiteBishop"></div>`;
            document.getElementById("whiteBishop" + newPieceNumber).addEventListener('dragstart', (e) => {drag(e); });
            increaseNewPieceNumber();
        } else {
            gameState.changeGameState(dropCell, dropCell, "blackBishop" + newPieceNumber);
            document.getElementById("cell" + dropCell).innerHTML = `<div draggable="true" id="blackBishop${newPieceNumber}" class="chessPiece chessPiece--blackBishop"></div>`;
            document.getElementById("blackBishop" + newPieceNumber).addEventListener('dragstart', (e) => {drag(e); });
            increaseNewPieceNumber();
        }
    }, {once: true});
}

function newPieceHandler(color) {
    if (color === "white") {
        document.getElementById("queen").classList.remove("newWhiteQueen");
        document.getElementById("rook").classList.remove("newWhiteRook");
        document.getElementById("knight").classList.remove("newWhiteKnight");
        document.getElementById("bishop").classList.remove("newWhiteBishop");
    } else {
        document.getElementById("queen").classList.remove("newBlackQueen");
        document.getElementById("rook").classList.remove("newBlackRook");
        document.getElementById("knight").classList.remove("newBlackKnight");
        document.getElementById("bishop").classList.remove("newBlackBishop");
    }
    
    document.getElementById("chooseNewPieceContainer").style.display = "none";
}