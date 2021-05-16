class Platform{
  constructor(x, y){
    this.x = x
    this.y = y

    this.html = document.createElement('div')
    this.html.className = 'platform'
    container.appendChild(this.html)
    setPosition(this.html, this.x, this.y)
  }
}
