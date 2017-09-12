/* globals __DEV__ */
import Phaser from 'phaser'
import RobPakora from '../sprites/RobPakora'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    const bannerText = 'Stream Fighter'
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)

    this.pakora = new RobPakora({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'robpakora'
    })

    this.game.add.existing(this.pakora)
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.pakora, 32, 32)
    }
  }
}
