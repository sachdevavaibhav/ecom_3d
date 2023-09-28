import CanvasModal from './canvas'
import Home from './pages/Home'
import Customizer from './pages/Customizer'

const App = () => {

  return (
    <main className='app transition-all ease-in'>
      <Home />
      <CanvasModal />
      <Customizer />
    </main>
  )
}

export default App;
