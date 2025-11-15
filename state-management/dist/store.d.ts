interface Game {
    id: string;
    blackPlayerName: string;
    whitePlayerName: string;
    moves: string[];
}
export declare class GameManager {
    games: Game[];
    static instance: GameManager;
    constructor();
    static getInstance(): GameManager;
    addmove(gameId: string, move: string): void;
    addGame(gameId: string): void;
}
export declare const gameManager: GameManager;
export {};
//# sourceMappingURL=store.d.ts.map