import React from 'react'

const WebsiteVisitors = ({ title, total }) => {
  return (
    <div className="visitors">
      <h4>{title}</h4>
      <h3>{total}</h3>
      <div className="empty"></div>
    </div>
  )
}

export default WebsiteVisitors
