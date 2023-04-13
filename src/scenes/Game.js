import Phaser from "phaser";

export default class Game extends Phaser.Scene {
  constructor() {
    super("game");
  }

  preload() {}

  create() {
    const ball = this.add.circle(400, 250, 10, 0xffffff).setOrigin(0.5);
    this.physics.add.existing(ball);
    ball.body.setBounce(1, 1);

    ball.body.setCollideWorldBounds(true, 1, 1);

    ball.body.setVelocity(200, 200);

    this.paddleLeft = this.add.rectangle(50, 250, 25, 100, 0xffffff, 1);
    this.physics.add.existing(this.paddleLeft, true);

    this.physics.add.collider(this.paddleLeft, ball);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.up.isDown) {
      this.paddleLeft.y -= 10;
      this.paddleLeft.body.updateFromGameObject();
    } else if (this.cursors.down.isDown) {
      this.paddleLeft.y += 10;
      this.paddleLeft.body.updateFromGameObject();
    }
  }
}
