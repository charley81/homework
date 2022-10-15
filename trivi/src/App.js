/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'
import { Button, Header, Info, ScoreWrap } from './components'
import Categories from './components/play/categories'

function App() {
  const [questionData, setQuestionData] = useState('')

  const getQuestionHandler = async () => {
    try {
      const response = await fetch('http://jservice.io/api/random')
      const data = await response.json()
      setQuestionData(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div
      css={css`
        max-width: var(--max-width);
        margin: auto;
        padding: 1rem;

        @media screen and (min-width: 768px) {
          max-width: var(--max-width-large);
        }
      `}
    >
      <Header text="Trivi" />
      <ScoreWrap value={questionData} />
      <Categories />
      <Button onGetQuestion={getQuestionHandler}>Play</Button>
      <Info data={questionData} />
    </div>
  )
}

export default App
