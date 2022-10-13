/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { Button, Header, Info, Score } from './components'

function App() {
  const [questionData, setQuestionData] = useState('')

  const getQuestionHandler = async () => {
    const response = await fetch('http://jservice.io/api/random')
    const data = await response.json()
    setQuestionData(data)
  }

  return (
    <div>
      <Header text="Trivi" />
      <Score info={questionData} />
      <Button onGetQuestion={getQuestionHandler}>Get Question</Button>
      <Info info={questionData} />
    </div>
  )
}

export default App
