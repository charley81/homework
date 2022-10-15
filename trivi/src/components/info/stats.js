/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Stats = ({ stats, category }) => {
  const value = stats?.value

  return (
    <div
      css={css`
        margin-bottom: 2rem;

        span {
          font-weight: 400;
          color: var(--color-grey-dark);
        }

        @media screen and (min-width: 768px) {
          display: flex;
          justify-content: space-between;
        }
      `}
    >
      <h2>
        Category: <span>{category}</span>
      </h2>
      <h2>
        Value: <span>{value ? value : 'No Value'}</span>
      </h2>
    </div>
  )
}

export default Stats
