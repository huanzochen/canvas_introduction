const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext('2d')

const mouse = {
  x: undefined,
  y: undefined,
}

// Mocha color https://color.adobe.com/zh/explore?page=2#
let colorArray = ['#F2AEAE', '#F2D0D0', '#C0C277', '#828C35', '#C16C6B']

window.addEventListener('mousemove', function (event) {
  mouse.x = event.x
  mouse.y = event.y
})

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  init()
})

function Circle(x, y, dx, dy, radius) {
  this.x = x
  this.y = y
  this.dx = dx
  this.dy = dy
  this.radius = radius

  const minRadius = this.radius
  const maxRadius = 40

  const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)]

  this.draw = function () {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.strokeStyle = randomColor
    c.stroke()
    c.fillStyle = randomColor
    c.fill()
  }

  this.update = function () {
    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx
    }

    if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy
    }

    this.x += this.dx
    this.y += this.dy

    // interactivity
    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.radius < maxRadius) {
        this.radius += 2
      }
    } else if (this.radius > minRadius) {
      this.radius -= 1
    }

    this.draw()
  }
}

let circleArray = []

function init() {
  circleArray = []

  for (let i = 0; i < 800; i++) {
    let dx = (Math.random() - 0.5) * 2
    let dy = (Math.random() - 0.5) * 2
    let radius = Math.random() * 5 + 1
    /**
     * [Min ~ Max] => Math.random * (Max - Min) + Min
     * Min = radius
     * Max = innerHeight/innerWidth - radius
     */
    let x = Math.random() * (window.innerWidth - radius - radius) + radius
    let y = Math.random() * (window.innerHeight - radius - radius) + radius

    circleArray.push(new Circle(x, y, dx, dy, radius))
  }
}

function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, window.innerWidth, window.innerHeight)

  circleArray.forEach((current) => {
    current.update()
  })
}

animate()
init()
