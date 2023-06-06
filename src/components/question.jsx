import { decode } from "html-entities";

export default function Question(props) {

  const { question, answers, selectedIndex, questionIndex, selectAnswer } = props;
  
  return (
    <>
      <div className="quiz-question">
        {decode(question)}
      </div>
      <div className="quiz-awsers-container">
        {
          answers.map((a, i) => 
            <span 
              key={`quiz-answer-${i}`}
              className={`quiz-awsers${selectedIndex === i && " selected-awser" || "" }`}
              onClick={() => selectAnswer(questionIndex, i)}
            >
              {decode(a)}
            </span>)}
      </div>
      <hr className="quiz-divisor" />
    </>
  )
}