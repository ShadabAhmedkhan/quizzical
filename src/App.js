import './App.css';
import Startquiz from './StartQuiz';
import QuizScreen from "./QuizScrren"
import React from 'react';
function App() {

  const [screen, setScreen] = React.useState(false)
  function ChangeScreen() {
    setScreen(prev => !prev)
  }


  return (
    <div>
      {
        screen ?
        <QuizScreen />
           :
          <Startquiz handleChange={ChangeScreen} />
      }

    </div>
  );
}

export default App;
