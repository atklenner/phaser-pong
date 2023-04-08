import Phaser from "phaser";

import TitleScreen from "./scenes/TitleScreen";
import Game from "./scenes/Game";

const config = {
  width: 800,
  height: 500,
  type: Phaser.AUTO,
  scene: [Game, TitleScreen],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
};

const game = new Phaser.Game(config);
