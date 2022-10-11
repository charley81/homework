import React from 'react'

const Sidebar = ({ navLinks }) => {
  return (
    <div className="sidebar">
      {navLinks.map(item => {
        return <p key={item}>{item}</p>
      })}
    </div>
  )
}

export default Sidebar
