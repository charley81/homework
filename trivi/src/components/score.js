import { useState } from 'react'

const Score = ({ info }) => {
  const [score, setScore] = useState('')
  return (
    <div>
      <h3>Score: {score}</h3>
    </div>
  )
}

export default Score
