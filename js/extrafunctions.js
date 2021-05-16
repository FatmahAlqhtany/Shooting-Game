 function setPosition(htmlElement, x, y) {
  htmlElement.style.transform = `translate(${x}px, ${y}px)`
}

 function checkCollision(one, two) {
  return !(
    two.left > one.right ||
    two.right < one.left ||
    two.top > one.bottom ||
    two.bottom < one.top
  )
}

function clamp(n, min, max) {
  if (n < min) {
    return min
  } else if (n > max) {
    return max
  } else {
    return n
  }
}

function gameLogic() {
  if (lost) {
    lostText.style.display = 'block'
  } else if (!finalBossMode && player.score === 50) {
    finalBossMode = true
    finalBoss = new FinalBoss(500, 300)
  } else if (!won && player.score === 70) {
    won = true
    container.removeChild(finalBoss.html)
    for (let i = 0; i < platforms.length; i++) {
      let platform = platforms[i]
      container.removeChild(platform.html)
    }
    wonText.style.display = 'block'
  }
}
