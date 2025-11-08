import { GameManager } from "./store.js";

const gameManager = new GameManager();

export function startLogger() {
    setInterval(() => {
        gameManager.logState();
    }, 4000)
}
