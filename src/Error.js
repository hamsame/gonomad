import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '90vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ fontSize: '10rem', color: 'red' }}>&#9888;</div>
      <h1> Page Not Found</h1>
      <br />
      <br />
      <Link to='/'>Homepage</Link>
    </div>
  )
}

export default Error
