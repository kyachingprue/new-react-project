
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import Nav from './Components/Nav/Nav'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {
  

  return (
    <>
      <Nav></Nav>
      
      <DaisyNav></DaisyNav>

      <h1 className='text-4xl font-bold bg-yellow-400 text-black rounded-xl text-center py-5'>Vite + React</h1>
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
