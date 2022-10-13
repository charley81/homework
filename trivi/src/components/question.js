import React from 'react'

const Question = ({ question }) => {
  return (
    <div>
      <h3>Question:</h3>
      <p>{question[0]?.question}</p>
    </div>
  )
}

export default Question
