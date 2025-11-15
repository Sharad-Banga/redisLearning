interface Game {
  id : string;
  blackPlayerName : string;
  whitePlayerName : string;
  moves : string[];
}

export class GameManager{
  games : Game[] = [];
  static instance : GameManager;

  constructor(){
    this.games = [];
  }

  static getInstance(){
    if(GameManager.instance){
      return GameManager.instance;
    }
    
    GameManager.instance = new GameManager();
    return this.instance;
  }

  addmove(gameId : string , move : string){
    const game = this.games.find(game => game.id == gameId);
  }

  addGame(gameId :string){
      const game = {
        id : gameId,
        blackPlayerName : "dexter",
        whitePlayerName : "joe",
        moves : []
      }

      this.games.push(game);
  }

}

export const gameManager = GameManager.getInstance();