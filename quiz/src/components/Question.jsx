import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import Options from './Options';

import "./Question.css";

const Question = () => {
    const [quizState, dispatch ] = useContext(QuizContext);
    const currentquestion = quizState.questions[quizState.currentQuestion ];

    const onSelectOption = (option) =>{
      dispatch({
        type: "CHECK_ANSWER", 
        payload: {answer: currentquestion.answer, option}
      })
    }


  return (
    <div id='question'>
      <p>Pergunta {quizState.currentQuestion + 1} a {quizState.questions.length} </p>
      <h2>{currentquestion.question}</h2>
      <div id="options-container">
          {currentquestion.options.map((option) => (
            <Options  
            option={option} 
            key={option} 
            answer={currentquestion.answer}
            selectOption={() => onSelectOption(option)}/>
          ))}
          {quizState.answerSelected && (
          <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>
            Continuar
           </button>
          )}
      </div>
    </div>
  )
}

export default Question;