import { useRef, useCallback, useEffect } from 'react'
import { getRandomRangeNumber } from '../../../utils/common'
import useCanvas from '../hooks/useCanvas'
import { Circle } from './object'

const Canvas = (props) => {
  const { width, height, mouseRef } = props

  const circleArray = useRef(null)

  useEffect(() => {
    const init = () => {
      circleArray.current = []

      for (let i = 0; i < 300; i++) {
        let dx = getRandomRangeNumber(-2, 2)
        let dy = getRandomRangeNumber(-2, 2)
        const radius = 2
        let x = getRandomRangeNumber(radius, width - radius)
        let y = getRandomRangeNumber(radius, height - radius)
        circleArray.current.push(new Circle(x, y, dx, dy, radius, width, height))
      }
    }

    init()
  }, [width, height])

  const draw = useCallback(
    (c) => {
      c.clearRect(0, 0, width, height)

      circleArray.current.forEach((current) => {
        current.update(c, mouseRef.current)
      })
    },
    // eslint-disable-next-line
    [width, height]
  )

  const canvasRef = useCanvas(draw)

  return <canvas ref={canvasRef} width={width} height={height}></canvas>
}

export default Canvas
