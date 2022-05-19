import { useEffect, useState, useCallback } from 'react'
import { throttle, debounce } from 'lodash'
import useCanvasCtx from './context'
import Canvas from './canvas'

import styles from './canvasInReact.module.scss'

const MainPage = () => {
  const [size, setSize] = useState({ width: 0, height: 0 })
  const { canvasContainerRef, mouseRef } = useCanvasCtx()

  // eslint-disable-next-line
  const handleWindowResize = useCallback(
    debounce(() => {
      setSize({
        width: canvasContainerRef.current.clientWidth,
        height: canvasContainerRef.current.clientHeight,
      })
    }, 200),
    []
  )

  useEffect(() => {
    // window.addEventListener('load', handleWindowResize)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [handleWindowResize])

  // Below will be another resolution for load with handleWindowResize,
  // will faster than load because load see many things, ref just looking at ref.
  useEffect(() => {
    handleWindowResize()
    // eslint-disable-next-line
  }, [canvasContainerRef.current])

  // eslint-disable-next-line
  const canvasMouseMove = useCallback(
    throttle((e) => {
      mouseRef.current = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY }
    }, 100),
    []
  )

  return (
    <div>
      <h1>canvas in React with custom hook</h1>
      <div
        ref={canvasContainerRef}
        className={styles.canvasContainer}
        onMouseMove={canvasMouseMove}
      >
        {canvasContainerRef.current && (
          <Canvas mouseRef={mouseRef} width={size.width} height={size.height} />
        )}
      </div>
    </div>
  )
}

export default MainPage
