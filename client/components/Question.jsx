import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import questionData from '../../data/questions.json'

function Question() {
    const { id } = useParams()
    const question = questionData.find((question) => question.id === id)
    const [score, setScore] = useState(0)

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            console.log(isCorrect)
            setScore(score + 1)
        }
    }
    return (
        <div className='quiz-container' >
            <div key={question.id}>
                <h4>{question.question}</h4>
                <Link to={`/quiz/${Number(id) + 1}`}><button onClick={() => handleAnswerOptionClick(question.options[0].isCorrect)}>{question.options[0].type}. {question.options[0].option}</button>
                    <button onClick={() => handleAnswerOptionClick(question.options[1].isCorrect)}>{question.options[1].type}. {question.options[1].option}</button>
                    <button onClick={() => handleAnswerOptionClick(question.options[2].isCorrect)}>{question.options[2].type}. {question.options[2].option}</button>
                    <button onClick={() => handleAnswerOptionClick(question.options[3].isCorrect)}>{question.options[3].type}. {question.options[3].option}</button>
                </Link>
            </div>
            <div>
                {score}
            </div>
        </div>
    )
}

export default Question
