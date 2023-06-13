import { useState } from "react"
import blob1 from "./assets/blob_1.svg"
import blob2 from "./assets/blob_2.svg"
import blob1Small from "./assets/blob_1_small.svg"
import blob2Small from "./assets/blob_2_small.svg"
import Intro from "./components/intro"
import Quiz from "./components/quiz"


function App() {

  const [gameStart, setGameStart] = useState(false)

  return (
    <main>      
      {
        !gameStart ?
        <>
          <img src={blob1} className="blob1" alt="blob 1" />
          <img src={blob2} className="blob2" alt="blob 2" />
          <Intro setGameStart={setGameStart} />
        </> :
        <>
          <img src={blob1Small} className="blob1" alt="blob 1" />
          <img src={blob2Small} className="blob2" alt="blob 2" />
          <Quiz setGameStart={setGameStart}/>
        </>
        
      }
      
    </main>
  )
}

export default App
