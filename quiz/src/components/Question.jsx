import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

const Question = () => {
    const [quizState, dispatch ] = useContext(QuizContext);
    const currentquestion = quizState.questions[quizState.currentQuestion ];

  return (
    <div id='question'>
      <p>Pergunta {quizState.currentQuestion + 1} a {quizState.questions.length} </p>
      <h2>{currentquestion.question}</h2>
      <div id="options-container">
          <p>Opções</p>
          <button>Continuar</button>
      </div>
    </div>
  )
}

export default Question;