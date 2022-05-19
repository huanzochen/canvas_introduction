const canvas = document.querySelector('canvas')

const innerWidth = window.innerWidth
const innerHeight = window.innerHeight

canvas.width = innerWidth
canvas.height = innerHeight

const c = canvas.getContext('2d')

console.log(canvas)

function Circle(x, y, dx, dy, radius) {
  this.x = x
  this.y = y
  this.dx = dx
  this.dy = dy
  this.radius = radius

  // color
  const redColor = Math.random() * 255
  const greenColor = Math.random() * 255
  const blueColor = Math.random() * 255

  this.draw = function () {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.strokeStyle = `rgba(${redColor},${greenColor},${blueColor})`
    c.stroke()
    c.fillStyle = `rgba(${redColor},${greenColor},${blueColor})`
    c.fill()
  }

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy
    }

    this.x += this.dx
    this.y += this.dy

    this.draw()
  }
}

let circleArray = []

// for (let i = 0; i < 40; i++) {
let dx = Math.random() - 0.5
let dy = Math.random() - 0.5
let radius = 30
/**
 * [20 ~ 100] => Math.random * (Max - Min) + Min
 * Min = radius
 * Max = innerHeight/innerWidth - radius
 */
let x = Math.random() * (innerWidth - radius - radius) + radius
let y = Math.random() * (innerHeight - radius - radius) + radius

circleArray.push(new Circle(x, y, dx, dy, radius))
// }

console.log(circleArray)

function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, innerWidth, innerHeight)

  circleArray.forEach((current) => {
    current.update()
  })
}

animate()
