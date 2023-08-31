import Welcome from './components/Welcome';
import Questions from './components/Question';
import Gameover from './components/Gameover';

import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';


import './App.css';



function App() {
  const [quizState, dispatch ] = useContext(QuizContext);

  useEffect(()=>{
      dispatch({type: "REORDER_QUESTIONS"})
  },[])

  return (
    <div className='App'>
      <h1>Quiz de programação</h1>
      {quizState.gameStage === "Start" && <Welcome /> }
      {quizState.gameStage === "Playing" && <Questions /> }
      {quizState.gameStage === "End" && <Gameover /> }
    </div>
  )
}

export default App
