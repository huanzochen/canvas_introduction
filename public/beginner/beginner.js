const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext('2d')

console.log(canvas)

// Square

// c.fillStyle = 'rgba(255,0,0,0.5)'
// c.fillRect(100, 100, 100, 100)
// c.fillStyle = 'rgba(0,255,0,0.5)'
// c.fillRect(250, 140, 100, 100)
// c.fillStyle = 'rgba(0,0,255,0.5)'
// c.fillRect(400, 100, 100, 100)
// c.fillRect(300, 300, 100, 100)

const Square = () => {
  // for (let i = 0; i < 10; i++) {

  // const redColor = Math.random() * 255
  // const greenColor = Math.random() * 255
  // const blueColor = Math.random() * 255

  const xStart = Math.random() * window.innerWidth
  const yStart = Math.random() * window.innerHeight

  console.log('xStart:', xStart)

  const width = 100
  const height = 100

  c.beginPath()
  // c.fillStyle = `rgba(${redColor},${greenColor},${blueColor})`
  c.fillRect(xStart, yStart, width, height)
  // }
}
Square()

// Line
// c.beginPath()
// c.moveTo(50, 300)
// c.lineTo(300, 100)
// c.lineTo(400, 300)
// c.strokeStyle = '#fa34a3'
// c.stroke()

const Line = () => {
  // for (let i = 0; i < 10; i++) {
  let xStart = Math.random() * window.innerWidth
  let yStart = Math.random() * window.innerWidth

  let xGoal = 300
  let yGoal = 300

  c.beginPath()
  c.moveTo(xStart, yStart)
  c.lineTo(xGoal, yGoal)
  // c.strokeStyle = '#fa34a3'
  c.stroke()
  // }
}
Line()

// Arc / Circle
// c.beginPath()
// c.arc(300, 300, 30, 0, Math.PI * 2, false)
// c.strokeStyle = 'blue'
// c.stroke()

const Circle = () => {
  // for (let i = 0; i < 30; i++) {
  // console.log('Math.random():', Math.random(), 'window.innerWidth:', window.innerWidth)

  let x = Math.random() * window.innerWidth
  let y = Math.random() * window.innerHeight
  c.beginPath()
  c.arc(x, y, 30, 0, Math.PI * 2, false)
  c.strokeStyle = 'blue'
  c.stroke()
  // }
}
Circle()
