/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Answer = ({ answer }) => {
  return (
    <div
      css={css`
        p {
          color: var(--color-grey-dark);
          margin-bottom: 2rem;
        }
      `}
    >
      <p>{answer[0]?.question}</p>
    </div>
  )
}

export default Answer
