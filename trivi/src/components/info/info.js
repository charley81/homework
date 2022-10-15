import { Stats, Answer, Question } from '../index'

const Info = ({ data }) => {
  return (
    <div>
      <Stats stats={data} />
      <Answer answer={data} />
      <Question question={data} />
    </div>
  )
}

export default Info
