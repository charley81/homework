import React from 'react'

const AverageRating = ({ title, total }) => {
  return (
    <div className="average">
      <h4>{title}</h4>
      <h3>{total}</h3>
    </div>
  )
}

export default AverageRating
