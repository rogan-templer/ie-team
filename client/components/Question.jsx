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
    return ( <>
    {id < 11 ? ( 
        <div className='container' >
            <div key={question.id} className=''>
                <h1 className="">{question.question}</h1>
                <Link to={`/quiz/${Number(id) + 1}`}>
                    <div className="options" > 
                    <button className="btn" onClick={() => handleAnswerOptionClick(question.options[0].isCorrect)}>{question.options[0].type}. {question.options[0].option}</button>                    
                    </div>
                    <div className="options">
                    <button className="btn" onClick={() => handleAnswerOptionClick(question.options[1].isCorrect)} >{question.options[1].type}. {question.options[1].option}</button>               
                    </div>
                    <div className="options">
                    <button className="btn" onClick={() => handleAnswerOptionClick(question.options[2].isCorrect)} >{question.options[2].type}. {question.options[2].option}</button>
                    </div>
                    <div className="options">
                    <button className="btn" onClick={() => handleAnswerOptionClick(question.options[3].isCorrect)} >{question.options[3].type}. {question.options[3].option}</button>
                    </div>
                </Link>
            </div>
            <div className="score" >
                Score: {score}
            </div>
        </div>
    )
        : (<div>
            <h1>Your final score is:</h1>
            <div className="score" >{score}</div>
            </div>
            )
        }
    </>
    )
}

export default Question
