import { useState } from 'react'

const Score = ({ value }) => {
  const [score, setScore] = useState(0)

  return (
    <div>
      <h3>Score: {score}</h3>
    </div>
  )
}

export default Score
