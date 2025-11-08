import { games } from "./store.js";
import { startLogger } from "./logger.js";
startLogger();
setInterval(() => {
    games.push({
        id: Math.random().toString(),
        whitePlayerName: 'sam',
        blackPlayerName: 'kaka',
        moves: []
    });
}, 5000);
//# sourceMappingURL=index.js.map