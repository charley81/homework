import { useState } from 'react'
import Score from './score'
import ScoreButtons from './score-buttons'

const ScoreWrap = ({ value }) => {
  const [score, setScore] = useState(0)

  const questionValue = value?.value

  const handleScoreIncrement = () => {
    value && setScore(currentScore => (currentScore += questionValue))
  }

  const handleScoreDecrement = () => {
    value && setScore(currentScore => (currentScore -= questionValue))
  }

  const handleScoreReset = () => {
    setScore(0)
  }

  return (
    <div>
      <Score value={value} newScore={score} />
      <ScoreButtons
        onScoreIncrement={handleScoreIncrement}
        onScoreDecrement={handleScoreDecrement}
        onScoreReset={handleScoreReset}
      />
    </div>
  )
}

export default ScoreWrap
