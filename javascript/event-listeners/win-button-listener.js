import startGame from "../start-game/start-game.js";
import { gameState } from "../game-state/game-state.js";

export default function winButtonListener() {
    document.getElementById('winButton').addEventListener("click" , () => {
        startGame();
        document.getElementById('winContainer').style.display = "none";
        gameState.reset();
    });
}