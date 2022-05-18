import { useEffect, useRef, useCallback } from 'react'
import { getRandomRangeNumber } from '../../../utils/common'
import { Circle } from './object'

const Canvas = (props) => {
  const { width, height, mouseRef } = props

  const canvasRef = useRef(null)
  const circleArray = useRef(null)

  const init = useCallback(() => {
    circleArray.current = []

    for (let i = 0; i < 300; i++) {
      let dx = getRandomRangeNumber(-2, 2)
      let dy = getRandomRangeNumber(-2, 2)
      const radius = 2
      let x = getRandomRangeNumber(radius, width - radius)
      let y = getRandomRangeNumber(radius, height - radius)
      circleArray.current.push(new Circle(x, y, dx, dy, radius, width, height))
    }
  }, [width, height])

  useEffect(() => {
    init()
    const canvas = canvasRef.current
    const c = canvas.getContext('2d')
    let animationFrameId = canvas.getAnimationFrame

    const render = () => {
      animationFrameId = window.requestAnimationFrame(render)
      c.clearRect(0, 0, width, height)

      circleArray.current.forEach((current) => {
        current.update(c, mouseRef.current)
      })
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }

    // eslint-disable-next-line
  }, [width, height])

  return <canvas ref={canvasRef} width={width} height={height}></canvas>
}

export default Canvas
