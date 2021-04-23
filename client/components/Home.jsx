import React from 'react'
import { Link } from 'react-router-dom'

import Button from './Button'

function Home() {
  return (
    <div className='container'>
      <div >
        <h3 className='col'>Test your knowledge on New Zealand history by taking our ANZAC quiz below!
        Select the answer you think is correct, and your total score will be revealed at the end.
        <br></br>
                          ...and don't forget to donate!
        </h3>
        <p className='col quote'>
          "They shall grow not old as we are that are left grow old,
          <br></br>
          Age shall not weary them nor the years contemn,
          <br></br>
          At the going down of the sun and in the morning,
          <br></br>
          We will remember them.
          <br></br>
          <br></br>

          <em>
            Lest we forget"
            <br></br>
            <br></br>
            - Laurence Binyon
          </em>

        </p>

        <Link to='/quiz/1'> <Button /> </Link>
      </div>
    </div >
  )
}

export default Home
