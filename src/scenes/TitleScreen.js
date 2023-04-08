import Phaser from "phaser";

export default class TitleScreen extends Phaser.Scene {
  constructor() {
    super("title-screen");
  }

  preload() {}

  create() {
    this.add.text(400, 250, "hell world!").setOrigin(0.5);
  }
}
