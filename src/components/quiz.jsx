import { useEffect, useState } from "react"

export default function Quiz(){

  const [quiz, setQuiz] = useState(null)

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
    .then(res => res.json())
    .then(data => {
      const quizData = data.results.map(d => {
        const correctAnswerIndex = Math.floor(Math.random() * 4)
        const answers = d.incorrect_answers
        answers.splice(correctAnswerIndex, 0, d.correct_answer)
        return { question: d.question, answers, correctAnswerIndex }
      })
      setQuiz(quizData)
    })
  }, [])

  return (
    <div>
      {
        quiz ?
        <h1>Quiz</h1> :
        <h1>Fetching questions...</h1>
      }      
    </div>    
  )
}