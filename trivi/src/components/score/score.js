/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Score = ({ newScore }) => {
  return (
    <div
      css={css`
        span {
          font-weight: 400;
          color: var(--color-grey-dark);
        }
      `}
    >
      <h2 className="test">
        Score: <span>{newScore}</span>
      </h2>
    </div>
  )
}

export default Score
