/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'

const Question = ({ question }) => {
  const [hidden, setHidden] = useState(true)

  const handleShowQuestion = () => {
    setHidden(current => !current)
    setTimeout(() => {
      setHidden(current => !current)
    }, 2000)
  }

  return (
    <div
      css={css`
        button {
          width: 100%;
          background: var(--color-dark);
          color: var(--color-light);
          padding: 0.5rem;
          border: 1px solid transparent;
          border-radius: var(--border-radius);
          font-size: 1rem;
          font-family: var(--font-family);
          margin-bottom: 1rem;
          transition: var(--transition);

          &:hover {
            background: inherit;
            color: var(--color-dark);
            border: 1px solid var(--color-dark);
          }
        }

        .hidden {
          display: none;
        }

        p {
          color: var(--color-grey-dark);
        }
      `}
    >
      <button onClick={handleShowQuestion}>Reveal Question</button>
      <p className={hidden ? 'hidden' : ''}>{question[0]?.answer}</p>
    </div>
  )
}

export default Question
