import React from 'react'
import { Link } from 'react-router-dom'

import Button from './Button'

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Nice quote</p>
      <Link to='/quiz'> <Button text='Test your Knowledge here' /> </Link>
    </div>
  )
}

export default Home
