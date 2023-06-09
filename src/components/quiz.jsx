import { useEffect, useState } from "react"
import Question from "./question"

export default function Quiz() {

  const [quiz, setQuiz] = useState(null)
  const [endQuiz, setEndQuiz] = useState(false)

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const quizData = data.results.map(d => {
        const answers = d.incorrect_answers
        const correctAnswerIndex = Math.floor(Math.random() * (answers.length + 1))        
        answers.splice(correctAnswerIndex, 0, d.correct_answer)
        return { question: d.question, answers, correctAnswerIndex, selectedIndex: null }
      })
      setQuiz(quizData)
    })
  }, [])

  function selectAnswer(questionIndex, answerIndex) {    
    setQuiz(prevQuiz => {
      prevQuiz[questionIndex].selectedIndex = answerIndex
      return [...prevQuiz]
    })
  }

  function checkAnswers() {
    !endQuiz && setEndQuiz(true)
  }

  return (
    <div className="quiz-section">
      {
        quiz ?
        <>
          {
            quiz.map((q, i) => 
              <Question
                key={i}
                question={q}
                questionIndex={i}
                selectAnswer={selectAnswer}
                endQuiz={endQuiz}
              />
              
            )
          }
          <div className="quiz-footer">
            <button className="button quiz-button" onClick={checkAnswers}>Check awsers</button>
          </div>
        </>        
        :
        <h1>Fetching questions...</h1>
      }      
    </div>    
  )
}