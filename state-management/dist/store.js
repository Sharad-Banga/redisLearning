export class GameManager {
    games = [];
    static instance;
    constructor() {
        this.games = [];
    }
    static getInstance() {
        if (GameManager.instance) {
            return GameManager.instance;
        }
        GameManager.instance = new GameManager();
        return this.instance;
    }
    addmove(gameId, move) {
        const game = this.games.find(game => game.id == gameId);
    }
    addGame(gameId) {
        const game = {
            id: gameId,
            blackPlayerName: "dexter",
            whitePlayerName: "joe",
            moves: []
        };
        this.games.push(game);
    }
}
export const gameManager = GameManager.getInstance();
//# sourceMappingURL=store.js.map