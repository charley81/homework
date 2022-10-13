import React from 'react'
import { Stats, Answer, Question } from './index'

const Info = ({ info }) => {
  console.log(info)
  return (
    <div>
      <Stats />
      <Answer />
      <Question />
    </div>
  )
}

export default Info
