import Phaser from "phaser";

export default class Game extends Phaser.Scene {
  constructor() {
    super("game");
  }

  preload() {}

  create() {
    const ball = this.add.circle(400, 250, 10, 0xffffff).setOrigin(0.5);
    this.physics.add.existing(ball);

    ball.body.setVelocity(200, 200);

    ball.body.setCollideWorldBounds(true, 1, 1);
  }
}
