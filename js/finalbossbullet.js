class BossBullet{
  constructor(x, y, dir){
    this.x = x
    this.y = y
    this.dir = dir

    this.html = document.createElement('div')
    this.html.className = 'boss-laser'
    container.appendChild(this.html)
    setPosition(this.html, this.x, this.y)
  }

  update(i){
    switch (this.dir) {
      case 'up':
        this.y -= 10
        break
      case 'down':
        this.y += 10
        break
      case 'left':
        this.x -= 10
        break
      case 'right':
        this.x += 10
    }

    if (finalBossMode && !won) {
      if (
        this.x < 0 ||
        this.x > GAME_WIDTH ||
        this.y < 0 ||
        this.y > GAME_HEIGHT
      ) {
        container.removeChild(this.html)
        finalBossBullets.splice(i, 1)
        i--
        return
      }

      for (let k = 0; k < platforms.length; k++) {
        let platform = platforms[k]

        let laserDiv = this.html.getBoundingClientRect()
        let platformDiv = platform.html.getBoundingClientRect()

        if (checkCollision(laserDiv, platformDiv)) {
          container.removeChild(this.html)
          finalBossBullets.splice(i, 1)
          i--
          break
        }
      }
    }

    if (!lost) {
      let laserDiv = this.html.getBoundingClientRect()
      let playerDiv = player.html.getBoundingClientRect()

      if (checkCollision(laserDiv, playerDiv)) {
        player.destroy()
        lost = true
      }
    }

    setPosition(this.html, this.x, this.y)
  }
}
