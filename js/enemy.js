class Enemy{
  constructor(x, y){
    this.x = x
    this.y = y

    this.html = document.createElement('div')
    this.html.className = 'enemy'
    container.appendChild(this.html)
    setPosition(this.html, this.x, this.y)
  }

  update(i){
    this.y += 4

     if (this.y > GAME_HEIGHT) {
      container.removeChild(this.html)
      enemies.splice(i, 1)
      i--
    }

     for (let j = 0; j < platforms.length; j++) {
      let platform = platforms[j]

      let enemyDiv = this.html.getBoundingClientRect()
      let platformDiv = platform.html.getBoundingClientRect()
      if (checkCollision(enemyDiv, platformDiv)) {
        container.removeChild(this.html)
        enemies.splice(i, 1)
        i--
      }
    }

    if (!lost) {
       let enemyDiv = this.html.getBoundingClientRect()
      let playerDiv = player.html.getBoundingClientRect()
      if (checkCollision(enemyDiv, playerDiv)) {
        player.destroy()
        container.removeChild(this.html)
        enemies.splice(i, 1)
        i--
      }
    }

     setPosition(this.html, this.x, this.y)
  }
}
