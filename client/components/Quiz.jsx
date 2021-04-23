import React from 'react'
import { Link } from 'react-router-dom'

import Question from './Question'

function Quiz() {
    return (
        <div className='container'>
            <div className='grid'>
                <Question />
            </div>
        </div>
    )
}

export default Quiz
