import { useState, useEffect } from 'react'
import StartScreen from './components/StartScreen'
import Game from './components/Game'


function App() {

  const [hasStarted, setHasStarted] = useState(false)
  const [category, setCategory] = useState("")

  const startGame = () => {
    setHasStarted(true)
  }

  const selectCategory = (event) => {
    const {value} = event.target
    setCategory(value)
  }

  const goStartScreen = () => {
    setHasStarted(false)
  }

  return (
    <div className="App">
      {hasStarted ? <Game category={category} goStartScreen={goStartScreen}/> : <StartScreen startGame={startGame} category={category} selectCategory={selectCategory}/>}
    </div>
  )
}

export default App
