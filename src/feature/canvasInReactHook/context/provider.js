import { useRef } from 'react'
import { CanvasContext } from '.'

const CanvasProvider = ({ children }) => {
  const canvasContainerRef = useRef(null)
  const mouseRef = useRef({ x: null, y: null })

  const getContextValue = () => {
    return {
      canvasContainerRef,
      mouseRef,
    }
  }

  return <CanvasContext.Provider value={getContextValue()}>{children}</CanvasContext.Provider>
}

export default CanvasProvider
