import React from 'react'

const ScoreButtons = ({ onScoreIncrement, onScoreDecrement, onScoreReset }) => {
  return (
    <div>
      <button onClick={onScoreIncrement}>Increase</button>
      <button onClick={onScoreDecrement}>Decrease</button>
      <button onClick={onScoreReset}>Reset</button>
    </div>
  )
}

export default ScoreButtons
