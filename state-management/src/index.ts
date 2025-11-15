import { GameManager } from "./store.js";
import { gameLogger } from "./logger.js";

// const gameManager = new GameManager();
import { gameManager } from "./store.js";
gameLogger();

function pusher(){

  setInterval(()=>{
    gameManager.addGame("123");
  },5000)
}

pusher();