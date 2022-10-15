/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useState } from 'react'

const Categories = ({ onGetCategory }) => {
  const [categories, setCategories] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const categoriesArray = [...categories]

  const getCategories = async () => {
    const response = await fetch('http://jservice.io/api/categories?count=100')
    const data = await response.json()
    setCategories(data)
  }
  useEffect(() => {
    getCategories()
  }, [])

  const handleChange = event => {
    onGetCategory(event.target.value)
  }

  return (
    <div
      css={css`
        select {
          width: 100%;
          padding: 0.5rem;
          margin-bottom: 1rem;
          background: inherit;
          border-radius: var(--border-radius);
        }
      `}
    >
      <select name="categories" id="categories" onChange={handleChange}>
        <option value="">Select a Category</option>
        {categoriesArray.map(item => {
          const { id, title } = item
          return (
            <option key={id} value={title}>
              {title}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Categories
