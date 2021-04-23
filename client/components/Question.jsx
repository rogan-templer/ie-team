import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import questionData from '../../data/questions.json'

function Question() {
    const { id } = useParams()
    const question = questionData.find((question) => question.id === id)
    const [score, setScore] = useState(0)

    return (
        <div className='quiz-container' >
            <div key={question.id}>
                <h4>{question.question}</h4>
                <button>{question.options[0].type}. {question.options[0].option}</button>
                <button>{question.options[1].type}. {question.options[1].option}</button>
                <button>{question.options[2].type}. {question.options[2].option}</button>
                <button>{question.options[3].type}. {question.options[3].option}</button>
            </div>
            <div>
                <Link to={`/quiz/${Number(id) + 1}`}> <button>Next</button> </Link>
            </div>
        </div>
    )
}

export default Question
