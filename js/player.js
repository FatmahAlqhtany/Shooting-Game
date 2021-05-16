class Player{
  constructor(){
    this.x = GAME_WIDTH / 2
    this.y = GAME_HEIGHT
    this.left = false
    this.right = false
    this.shoot = false
    this.score = 0

    this.html = document.createElement('div')
    this.html.className = 'player'
    this.html.style.maskImage
    container.appendChild(this.html)
    setPosition(this.html, this.x, this.y)
  }

  update(){
    if (!lost) {
      if (this.left) {
        this.x -= 8
      }

      if (this.right) {
        this.x += 8
      }

      this.x = clamp(this.x, 30, GAME_WIDTH - 40)

      if (this.shoot && currentFrame % 12 === 0) {
        playerBullets.push(new Laser(player.x, player.y))
      }

      setPosition(this.html, this.x, this.y)
    }
  }

  destroy(){
    container.removeChild(this.html)
    lost = true
  }
}

function onKeyDown(event) {

  switch (event.keyCode) {
    case 37:
      player.left = true
      break
    case 39:
      player.right = true
      break
    case 13:
      player.shoot = true
      break
  }
}

function onKeyUp(event) {
  switch (event.keyCode) {
    case 37:
      player.left = false
      break
    case 39:
      player.right = false
    case 13:
      player.shoot = false
      break
  }
}

window.addEventListener('keydown', onKeyDown)
window.addEventListener('keyup', onKeyUp)
