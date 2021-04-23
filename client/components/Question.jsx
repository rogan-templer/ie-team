import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import questionData from '../../data/questions.json'

function Question() {
    const { id } = useParams()
    const question = questionData.find((question) => question.id === id)
    const [score, setScore] = useState(0)

    return (
        <div className='container'>
            <div key={question.id} className='grid'>

                <h1 className='col'>{question.question}</h1>
                <div className='grid'>
                <ul className='grid'>
                <li>
                    <button>{question.options[0].type}. {question.options[0].option}</button>
                    </li>
                <li>
                    <button>{question.options[1].type}. {question.options[1].option}</button>
                </li>
                <li>
                    <button>{question.options[2].type}. {question.options[2].option}</button>
                </li>

                <li>
                    <button>{question.options[3].type}. {question.options[3].option}</button>
                </li>
                </ul>
                </div>
            </div>
            <div>
                <Link to={`/quiz/${Number(id) + 1}`}> <button className='col'>Next</button> </Link>
            </div>
        </div>
    )
}

export default Question
