import { decode } from "html-entities";

export default function Question(props) {

  const { question, answers, selectedIndex, correctAnswerIndex } = props.question
  const {questionIndex, selectAnswer, endQuiz} = props

  function getAnswerClassName(index) {
    return (endQuiz && correctAnswerIndex === index && "quiz-answers selected-correct-answer")
      || (endQuiz && selectedIndex === index && correctAnswerIndex !== selectAnswer && "quiz-answers selected-incorrect-answer")
      || (selectedIndex === index && "quiz-answers selected-answer")
      || "quiz-answers"
  }
  
  return (
    <>
      <div className="quiz-question">
        {decode(question)}
      </div>
      <div className="quiz-answers-container">
        {
          answers.map((a, i) => 
            <span 
              key={i}
              className={getAnswerClassName(i)}
              onClick={endQuiz ? undefined : () => selectAnswer(questionIndex, i)}
            >
              {decode(a)}
            </span>)}
      </div>
      <hr className="quiz-divisor" />
    </>
  )
}