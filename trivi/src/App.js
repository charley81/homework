/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { Button, Header, Info, ScoreWrap } from './components'

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
    <div>
      <Header text="Trivi" />
      <ScoreWrap value={questionData} />
      <Button onGetQuestion={getQuestionHandler}>Play</Button>
      <Info data={questionData} />
    </div>
  )
}

export default App
