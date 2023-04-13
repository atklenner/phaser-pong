import Phaser from "phaser";

export default class Game extends Phaser.Scene {
  constructor() {
    super("game");
  }

  init() {
    this.paddleRightVelocity = 0;
  }

  preload() {}

  create() {
    this.ball = this.add.circle(400, 250, 10, 0xffffff).setOrigin(0.5);
    this.physics.add.existing(this.ball);
    this.ball.body.setBounce(1, 1);

    this.ball.body.setCollideWorldBounds(true, 1, 1);

    this.ball.body.setVelocity(200, 200);

    this.paddleLeft = this.add.rectangle(50, 250, 25, 100, 0xffffff, 1);
    this.physics.add.existing(this.paddleLeft, true);

    this.paddleRight = this.add.rectangle(750, 250, 25, 100, 0xffffff, 1);
    this.physics.add.existing(this.paddleRight, true);

    this.physics.add.collider(this.paddleLeft, this.ball);
    this.physics.add.collider(this.paddleRight, this.ball);

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

    if (Math.abs(this.ball.y - this.paddleRight.y) < 10) {
      return;
    }

    if (this.ball.y < this.paddleRight.y) {
      this.paddleRightVelocity += -3;
      if (this.paddleRightVelocity < -10) {
        this.paddleRightVelocity = -10;
      }
    } else if (this.ball.y > this.paddleRight.y) {
      this.paddleRightVelocity += 3;
      if (this.paddleRightVelocity > 10) {
        this.paddleRightVelocity = 10;
      }
    }

    this.paddleRight.y += this.paddleRightVelocity;
    this.paddleRight.body.updateFromGameObject();
  }
}
