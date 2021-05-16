class Laser{
  constructor(x, y){
    this.x = x;
    this.y = y;

    this.html = document.createElement('div')
    this.html.className = 'laser'
    container.appendChild(this.html)
    setPosition(this.html, x, y)
  }

  update(i){
    this.y -= 12

    if (this.y < 0) {
      container.removeChild(this.html)
      playerBullets.splice(i, 1)
      i--
    }

    if (!finalBossMode) {
      for (let j = 0; j < enemies.length; j++) {
        let enemy = enemies[j]

        if (!lost) {
          let laserDiv = this.html.getBoundingClientRect()
          let enemyDiv = enemy.html.getBoundingClientRect()
          if (checkCollision(laserDiv, enemyDiv)) {
            if (player.score < 50) counter.innerHTML = ++player.score
            container.removeChild(enemy.html)
            container.removeChild(this.html)
            playerBullets.splice(i, 1)
            enemies.splice(j, 1)
            i--
            j--
            break
          }
        }
      }
    }

    if (!won) {
      for (let k = 0; k < platforms.length; k++) {
        let platform = platforms[k]
        let laserDiv = this.html.getBoundingClientRect()
        let platformDiv = platform.html.getBoundingClientRect()
        if (checkCollision(laserDiv, platformDiv)) {
          container.removeChild(this.html)
          playerBullets.splice(i, 1)
          i--
          break
        }
      }
    }


    if (!lost && !won && finalBossMode) {
      let bossDiv = finalBoss.html.getBoundingClientRect()
      let laserDiv = this.html.getBoundingClientRect()

      if (checkCollision(bossDiv, laserDiv)) {
        if (player.score < 70) counter.innerHTML = ++player.score
        container.removeChild(this.html)
        playerBullets.splice(i, 1)
        i--
      }
    }


    setPosition(this.html, this.x, this.y)
  }
}
