import React from 'react'

const Reviews = ({ title, total }) => {
  return (
    <div className="reviews">
      <h4>{title}</h4>
      <h3>{total}</h3>
    </div>
  )
}

export default Reviews
