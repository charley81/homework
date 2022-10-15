/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useState } from 'react'

const Categories = () => {
  const [categories, setCategories] = useState('')

  const categoriesArray = [...categories]

  const getCategories = async () => {
    const response = await fetch('http://jservice.io/api/categories?count=10')
    const data = await response.json()
    setCategories(data)
  }
  useEffect(() => {
    getCategories()
  }, [])

  return (
    <div
      css={css`
        select {
          width: 100%;
          padding: 0.5rem;
          margin-bottom: 1rem;
        }
      `}
    >
      <select name="categories" id="categories">
        {categoriesArray.map(item => {
          const { id, title } = item
          return <option key={id}>{title}</option>
        })}
      </select>
    </div>
  )
}

export default Categories
