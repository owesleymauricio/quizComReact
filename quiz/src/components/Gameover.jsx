import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import weldone from '../assets/weldone.svg';

import './Gameover.css';

function Gameover() {
    const [quizState, dispatch ] = useContext(QuizContext);

  return (
    <div id="gameover">
    <h2>Fim do jogo</h2>
    <p>Pontuação: {quizState.score}</p>
    <p>Você acertou {quizState.score} de {quizState.questions.length}{" "} perguntas</p>
    <img src={weldone} alt="fim do jogo" />
    <button onClick={() => dispatch({type: "NEW_GAME"})}>REINICIAR</button>
    </div>
  )
}

export default Gameover