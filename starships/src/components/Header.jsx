import { css } from '@emotion/react'

export default function Header() {
  return (
    <div
      css={css`
        background: var(--colorDark);
        color: var(--colorPrimary);
        padding: 1rem;
        text-align: center;
      `}
    >
      <h3>STAR WARS STARTSHIPS</h3>
    </div>
  )
}
