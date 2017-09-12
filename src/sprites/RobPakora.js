import Phaser from 'phaser'

const ROTATION_SPEED = 0.05
const MAX_ANGLE = 20
export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.rotationBase = Math.PI / 2;
  }

  update () {
    this.rotationBase = (this.rotationBase += ROTATION_SPEED) % (Math.PI * 2)
    this.angle = (Math.sin(this.rotationBase) * MAX_ANGLE)
  }
}
