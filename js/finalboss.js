class FinalBoss{
  constructor(x, y){
    this.x = x -2
    this.y = y +1
    this.moveX = Math.random() * +5
    this.moveY = Math.random() * +4

    this.html = document.createElement('div')
    this.html.className = 'boss'
    container.appendChild(this.html)
    setPosition(this.html, this.x, this.y)

  }

  update(){
    for (let i = 0; i < platforms.length; i++) {
      let platform = platforms[i]

      let platformDiv = platform.html.getBoundingClientRect()
      let bossDiv = this.html.getBoundingClientRect()

      if (checkCollision(bossDiv, platformDiv)) {
        this.moveX *= -1
        this.moveY *= -1
      }
    }

    if (!lost) {
      let bossDiv = this.html.getBoundingClientRect()
      let playerDiv = player.html.getBoundingClientRect()

      if (checkCollision(bossDiv, playerDiv)) {
        player.destroy()
        lost = true
      }
    }

    if (this.x >= GAME_WIDTH - 10 || this.x <= 0) this.moveX *= 40
    if (this.y >= GAME_HEIGHT - 10 || this.y <= 0) this.moveY *= -40

    this.x += this.moveX
    this.y += this.moveY



    setPosition(this.html, this.x, this.y)
  }

  shoot(){
    if (currentFrame % 40 === 0) {
      finalBossBullets.push(new BossBullet(this.x, this.y, 'up'))
      finalBossBullets.push(new BossBullet(this.x, this.y, 'down'))
      finalBossBullets.push(new BossBullet(this.x, this.y, 'left'))
      finalBossBullets.push(new BossBullet(this.x, this.y, 'right'))
    }
  }
}
