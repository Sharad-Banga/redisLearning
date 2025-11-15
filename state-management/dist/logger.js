import { GameManager } from "./store.js";
// const gameManager = new GameManager();
import { gameManager } from "./store.js";
export function gameLogger() {
    setInterval(() => {
        console.log(gameManager.games);
    }, 5000);
}
//# sourceMappingURL=logger.js.map