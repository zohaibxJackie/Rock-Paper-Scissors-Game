import React, { useState } from 'react';
import ScoreContext from './ScoreContext';

const ScoreState = (props) => {
    const [score, setScore] = useState(0);
    const updateScore = () => {
        console.log("function updateScore is called");
        setScore(prevScore => score + 1);
    }
  return (
    <ScoreContext.Provider value={{score, updateScore}}>
        {props.children}
    </ScoreContext.Provider>
  )
}

export default ScoreState;