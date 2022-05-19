import { useEffect, useRef } from 'react'

const useCanvas = (draw) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const c = canvas.getContext('2d')
    let animationFrameId

    const render = () => {
      animationFrameId = window.requestAnimationFrame(render)

      draw(c)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  return canvasRef
}

export default useCanvas
