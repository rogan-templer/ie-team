import React from 'react'
import { Link } from 'react-router-dom'

import Button from './Button'

function Home() {
  return (
    <div className='container'>
      <div className='grid'>
      <h3 className='col'>Home</h3>
      <Link to='/quiz'> <Button/> </Link>
      </div>
    </div>
  )
}

export default Home
