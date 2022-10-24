import { useState, useEffect, CSSProperties } from 'react'
import Card from './Card'
import { css } from '@emotion/react'
import { PropagateLoader } from 'react-spinners'

const URL = 'https://swapi.dev/api/starships'

let override = {
  display: 'block',
  margin: '20vh',
  textAlign: 'center'
}

export default function Services() {
  const [ships, setShips] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    handleGetShips()
  }, [])

  async function handleGetShips() {
    setLoading(true)
    const res = await fetch(URL)
    const data = await res.json()
    setShips(data.results)
    setLoading(false)
  }

  if (!loading) {
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
  } else {
    return (
      <PropagateLoader
        size={25}
        aria-label="Loading Spinner"
        cssOverride={override}
      />
    )
  }
}
