/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import { Button, Header, Info, ScoreWrap } from './components'
import Categories from './components/play/categories'

function App() {
  const [questionData, setQuestionData] = useState('')
  const [category, setCategory] = useState('')
  const [id, setId] = useState('')
  const [catQuestion, setCatQuestion] = useState('')

  const getQuestionHandler = async () => {
    try {
      const response = await fetch(`http://jservice.io/api/category?id=${id}`)
      const data = await response.json()
      setQuestionData(data)
    } catch (error) {
      console.error(error)
    }
  }

  const getCategories = async () => {
    const response = await fetch('http://jservice.io/api/categories?count=100')
    const data = await response.json()
    const dataArray = [...data]
    const title = dataArray.filter(item => item.title === category)
    setId(title[0]?.id)
  }

  useEffect(() => {
    getCategories()
  }, [category])

  const getCategory = value => {
    setCategory(value)
  }

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * questionData.clues?.length)
    const question = questionData.clues && questionData.clues[randomIndex]
    setCatQuestion(question)
  }, [questionData])

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
      <ScoreWrap value={catQuestion} />
      <Categories onGetCategory={getCategory} />
      <Button onGetQuestion={getQuestionHandler}>Play</Button>
      <Info data={catQuestion} category={category} />
    </div>
  )
}

export default App
