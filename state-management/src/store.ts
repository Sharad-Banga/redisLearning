interface Game {
  id : string;
  whitePlayerName : string;
  blackPlayerName:string;
  moves : string[];
}

export class GameManager{
  private games:Game[] =[];

  public addGame(game : Game){
    this.games.push(game);
  }

  public getGames(){
    return this.games;
  }

  public addMove(gameId: string, movee: string) {
        const game = this.games.find(game => game.id === gameId);
        if (game) {
            game.moves.push(movee);
        }
  }

  public logState(){
    console.log(this.games);
    
  }


}