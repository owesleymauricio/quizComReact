import Quiz from '../assets/quiz.svg';

import './welcome.css';

const Welcome = () => {
  return (
    <div id='welcome'>
      <h2>Seja bem vindo</h2>
      <p>Clique no botão abaixo para começar: </p>
      <button>INICIAR</button>
      <img src= {Quiz} alt='Inicio do quiz'/>
    </div>
  )
}

export default Welcome;