import addStartButtonListener from "./event-listeners/start-button-listener.js";
import winButtonListener from "./event-listeners/win-button-listener.js";

function app() {
    addStartButtonListener();
    winButtonListener();
}

app();