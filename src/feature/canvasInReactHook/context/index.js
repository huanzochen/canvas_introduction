import { createContext, useContext } from 'react'

import CanvasProvider from './provider'

const CanvasContext = createContext(null)

const useCanvasCtx = () => {
  const contextValue = useContext(CanvasContext)

  if (process.env.NODE_ENV !== 'production' && !contextValue) {
    console.error('U should use useCanvas inside Canvas.Provider!')
  }

  return contextValue
}

export { CanvasProvider, CanvasContext }
export default useCanvasCtx
