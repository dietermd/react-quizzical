import { useState } from "react"
import blob1 from "./assets/blob_1.svg"
import blob2 from "./assets/blob_2.svg"
import Intro from "./components/intro"


function App() {

  const [gameStart, setGameStart] = useState(false)

  return (
    <main>
      <img src={blob1} className="blob1" alt="blob 1"/>
      <img src={blob2} className="blob2" alt="blob 2"/>
      {
        !gameStart ? 
        <Intro /> :
        <h1>Quizz</h1>
      }
      
    </main>
  )
}

export default App
