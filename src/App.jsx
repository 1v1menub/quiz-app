import { useState, useEffect } from 'react'
import { Toaster } from "react-hot-toast"
import StartScreen from './components/StartScreen'
import Game from './components/Game'


function App() {

  const [hasStarted, setHasStarted] = useState(false)
  const [category, setCategory] = useState("")

  const startGame = () => {
    setHasStarted(true)
  }

  const goStartScreen = () => {
    setHasStarted(false)
  }

  return (
    <div className="App">
      <Toaster />
      {hasStarted ? <Game category={category} goStartScreen={goStartScreen}/> : <StartScreen startGame={startGame}/>}
    </div>
  )
}

export default App
