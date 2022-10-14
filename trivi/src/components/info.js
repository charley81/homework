import React from 'react'
import { Stats, Answer, Question } from './index'

const Info = ({ data, onChangeCount }) => {
  return (
    <div>
      <Stats stats={data} />
      <Answer answer={data} />
      <Question question={data} onChangeCount={onChangeCount} />
    </div>
  )
}

export default Info
