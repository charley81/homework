/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Button = ({ children, onGetQuestion, data }) => {
  return (
    <>
      <button
        onClick={onGetQuestion}
        css={css`
          width: 100%;
          background: var(--color-primary);
          color: var(--color-light);
          padding: 0.5rem;
          border: 1px solid transparent;
          border-radius: var(--border-radius);
          font-size: 1rem;
          font-family: var(--font-family);
          margin-bottom: 2rem;
          cursor: pointer;
          transition: var(--transition);

          &:hover {
            background: inherit;
            color: var(--color-primary);
            border: 1px solid var(--color-primary);
          }
        `}
      >
        {children}
      </button>
    </>
  )
}

export default Button
