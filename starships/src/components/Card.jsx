import { css } from '@emotion/react'

export default function Card({ ship }) {
  return (
    <div
      css={css`
        background: var(--colorDark);
        color: var(--colorPrimary);
        height: 200px;
        border-radius: var(--borderRadius);
        padding: 1rem;

        h4 {
          border-bottom: 1px dotted var(--colorGreyDark);
          padding-bottom: 0.5rem;
          margin-bottom: 1rem;
        }

        p {
          margin: 0.25rem 0;
        }

        span {
          color: var(--colorGreyLight);
        }
      `}
    >
      <div className="content">
        <h4>{ship.name}</h4>
        <p>
          Model: <span>{ship.model}</span>
        </p>
        <p>
          Manufacturer: <span>{ship.manufacturer}</span>
        </p>
        <p>
          Starship Class: <span>{ship.starship_class}</span>
        </p>
      </div>
    </div>
  )
}
