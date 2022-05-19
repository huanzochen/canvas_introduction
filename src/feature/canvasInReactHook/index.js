import { CanvasProvider } from './context'
import MainPage from './mainPage'

const CanvasInReact = () => {
  return (
    <CanvasProvider>
      <MainPage />
    </CanvasProvider>
  )
}

export default CanvasInReact
