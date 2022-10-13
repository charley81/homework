import React from 'react'
import { Stats, Answer, Question } from './index'

const Info = ({ info }) => {
  return (
    <div>
      <Stats stats={info} />
      <Question question={info} />
      <Answer answer={info} />
    </div>
  )
}

export default Info
