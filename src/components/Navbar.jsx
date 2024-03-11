import React from 'react'

function Navbar() {
  return (
    <div  style={{marginTop: 0}}>
      <span style={{marginLeft: 10, marginRight: 10}}><a href="/">Home</a></span>
      <span style={{marginLeft: 10, marginRight: 10}}><a href="/survey">Survey</a></span>
      <span style={{marginLeft: 10, marginRight: 10}}><a href="/results">Results</a></span>
    </div>
  )
}

export default Navbar
