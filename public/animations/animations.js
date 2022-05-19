const canvas = document.querySelector('canvas')

const innerWidth = window.innerWidth
const innerHeight = window.innerHeight

canvas.width = innerWidth
canvas.height = innerHeight

const c = canvas.getContext('2d')

console.log(canvas)

// function Circle(x, y) {
//   this.x = x
//   this.y = y
// }

let dx = (Math.random() - 0.5) * 10
let dy = (Math.random() - 0.5) * 10
let radius = 30
/**
 * [20 ~ 100] => Math.random * (Max - Min) + Min
 * Min = radius
 * Max = innerHeight/innerWidth - radius
 */
let x = Math.random() * (innerWidth - radius - radius) + radius
let y = Math.random() * (innerHeight - radius - radius) + radius

function animate() {
  // console.log('frames')
  // console.log('x:', x, 'innerWidth:', innerWidth)
  // console.log('y:', y, 'innerWidth:', innerHeight)

  // console.log('Math.random() * innerWidth:', Math.random() * innerWidth)

  requestAnimationFrame(animate)

  // c.clearRect(0, 0, innerWidth, innerHeight)

  c.beginPath()
  c.arc(x, y, radius, 0, Math.PI * 2, false)
  c.strokeStyle = 'blue'
  c.stroke()

  // if (x + radius > innerWidth || x - radius < 0) {
  //   dx = -dx
  // }

  // if (y + radius > innerHeight || y - radius < 0) {
  //   dy = -dy
  // }

  // x += dx
  // y += dy
}

animate()
