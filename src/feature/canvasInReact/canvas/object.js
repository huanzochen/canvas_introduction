import { mochaColorArray } from '../../../constant/common'

function Circle(x, y, dx, dy, radius, width, height) {
  this.x = x
  this.y = y
  this.dx = dx
  this.dy = dy
  this.radius = radius
  this.width = width
  this.height = height

  const minRadius = this.radius
  const maxRadius = 40

  const incrementRadius = 3
  const decrementRadius = 1

  const randomColor = mochaColorArray[Math.floor(Math.random() * mochaColorArray.length)]

  // draw background
  this.draw = function (c) {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.strokeStyle = randomColor
    c.stroke()
    c.fillStyle = randomColor
    c.fill()
  }

  this.update = function (c, mouse) {
    // movement animation
    if (this.x + this.radius > this.width || this.x - this.radius < 0) this.dx = -this.dx
    if (this.y + this.radius > this.height || this.y - this.radius < 0) this.dy = -this.dy

    this.x += this.dx
    this.y += this.dy

    this.draw(c)

    // interactivity
    const isCursorTouchCircle =
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    if (isCursorTouchCircle) {
      const biggerRadius = this.radius + incrementRadius
      const isExceedXBoundary = this.x + biggerRadius > this.width || this.x - biggerRadius < 0
      const isExceedYBoundary = this.y + biggerRadius > this.height || this.y - biggerRadius < 0
      const isNotExceedBoundary = !isExceedXBoundary && !isExceedYBoundary

      if (this.radius < maxRadius && isNotExceedBoundary) {
        this.radius += incrementRadius
      }
    } else if (this.radius > minRadius) {
      this.radius -= decrementRadius
    }
  }
}

export { Circle }
