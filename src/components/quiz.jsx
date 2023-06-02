import { useEffect, useState } from "react"

export default function Quiz(){

  const [quiz, setQuiz] = useState(null)

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

  
  return (
    <div className="quiz-section">
      {
        quiz ?
        <>
          {
            quiz.map((q, i) =>
              <div key={`quiz-questions-${i}`}>
                <div className="quiz-question">
                  {q.question}
                </div>
                <div className="quiz-awsers-container">
                  {q.answers.map((a, j) => <span key={`quiz-answer-${i}-${j}`} className={`quiz-awsers${q.selectedIndex === j && " selected-awser" || "" }`}>{a}</span>)}
                </div>
                <hr className="quiz-divisor" />
              </div>          
            )
          }
          <div className="quiz-footer">
            <button className="button quiz-button">Check awsers</button>
          </div>
        </>        
        :
        <h1>Fetching questions...</h1>
      }      
    </div>    
  )
}