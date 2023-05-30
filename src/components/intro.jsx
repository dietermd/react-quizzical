
export default function Intro(props) {
  return (
    <>
      <span className="intro-title">Quizzical</span>
      <span className="intro-description">Test your Knowledge</span>
      <button className="intro-button" onClick={props.setGameStart}>Start quiz</button>
    </>
  )
}