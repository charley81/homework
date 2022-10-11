import React from 'react'

const SentimentAnalysis = ({ title, totals }) => {
  return (
    <div className="analysis">
      <h4>{title}</h4>
      <div className="totals">
        {totals.map(number => {
          return <p key={number}>{number}</p>
        })}
      </div>
    </div>
  )
}

export default SentimentAnalysis
