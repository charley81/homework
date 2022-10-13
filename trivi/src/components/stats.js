import React from 'react'

const Stats = ({ stats }) => {
  return (
    <div>
      <h3>Category: {stats[0]?.category.title}</h3>
      <h3>Value: {stats[0]?.value}</h3>
    </div>
  )
}

export default Stats
