let container = document.querySelector('.game');
let counter = document.getElementById('counter');
let lostText = document.querySelector('.lost');
let wonText = document.querySelector('.won') ;

let GAME_WIDTH = 1200
let GAME_HEIGHT = 500

let player = new Player();
let playerBullets = []

let finalBoss = null
let finalBossBullets = []
let finalBossMode = false

let enemies = []

let platforms = []

let currentFrame = 0
let lost = false
let won = false

platforms.push(new Platform(Math.random() * 200 + 100, Math.random() * 200 + 500))
platforms.push(new Platform(Math.random() * 200 + 100 + 300, Math.random() * 200 + 500 - 400))

function update() {

  player.update();


  for (let i = 0; i < playerBullets.length; i++) {
    playerBullets[i].update(i)
  }

  if (!finalBossMode && currentFrame % 30 === 0)
    enemies.push(new Enemy((Math.random() * 500) % (GAME_WIDTH - 10), 10))

  for (let i = 0; i < enemies.length; i++) {
    enemies[i].update(i)
  }

  if (finalBossMode && !won){
    finalBoss.update()
    finalBoss.shoot()
  }

  for (let i = 0; i < finalBossBullets.length; i++) {
    finalBossBullets[i].move(i)
  }

  gameLogic()
  currentFrame++
  window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)
