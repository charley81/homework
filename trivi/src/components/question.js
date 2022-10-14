/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'

const Question = ({ question, onChangeCount }) => {
  const [hidden, setHidden] = useState(true)

  const handleShowQuestion = () => {
    console.log('clicked')
    setHidden(current => !current)
  }

  return (
    <div
      css={css`
        .hidden {
          display: none;
        }
      `}
    >
      <button onClick={handleShowQuestion}>Reveal Question</button>
      <p className={hidden ? 'hidden' : ''}>{question[0]?.question}</p>
    </div>
  )
}

export default Question
