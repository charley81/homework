import React from 'react'
import Score from './score'
import ScoreButtons from './score-buttons'

const ScoreWrap = ({ value }) => {
  return (
    <div>
      <Score value={value} />
      <ScoreButtons />
    </div>
  )
}

export default ScoreWrap
