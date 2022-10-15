import { Stats, Answer, Question } from '../index'

const Info = ({ data, category }) => {
  return (
    <div>
      <Stats stats={data} category={category} />
      <Answer answer={data} />
      <Question question={data} />
    </div>
  )
}

export default Info
