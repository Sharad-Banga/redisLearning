import { games } from "./store.js";
import { loggerWork } from "./logger.js";
loggerWork();
function mainWork() {
    setInterval(() => {
        games.push({
            id: Math.random().toString(),
            whitePlayerName: "sam",
            blackPlayerName: "bob",
            moves: []
        });
    }, 5000);
}
mainWork();
//# sourceMappingURL=index.js.map