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
      <p>{answer ? answer?.question : 'Sorry no answer for this one.'}</p>
    </div>
  )
}

export default Answer
