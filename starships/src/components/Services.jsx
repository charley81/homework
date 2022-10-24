import { useState, useEffect } from 'react'
import Card from './Card'
import { css } from '@emotion/react'

const URL = 'https://swapi.dev/api/starships'

export default function Services() {
  const [ships, setShips] = useState([])

  useEffect(() => {
    handleGetShips()
  }, [])

  async function handleGetShips() {
    const res = await fetch(URL)
    const data = await res.json()
    setShips(data.results)
  }

  return (
    <>
      <ul
        css={css`
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1rem;
          margin: 1rem auto;
          max-width: var(--maxWidth);
          padding: 1rem;
        `}
      >
        {ships.map(ship => (
          <li key={ship.name}>
            <Card ship={ship} />
          </li>
        ))}
      </ul>
    </>
  )
}
