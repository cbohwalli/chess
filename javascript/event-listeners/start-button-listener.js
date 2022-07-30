import startGame from "../start-game/start-game.js";

export default function addStartButtonListener() {
    document.getElementById('startButton').addEventListener("click" , startGame);
}