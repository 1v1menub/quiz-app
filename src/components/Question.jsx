import { useState, useEffect } from 'react'
import { decode } from "html-entities"
import Answer from "./Answer"

const Question = ({ index, difficulty, question, correct_answer, incorrect_answers, answers, selected, selectAnswer, checked}) => {


    const answersElem = answers.map((ans) => {
        return <Answer key={ans} checked={checked} correct_answer={correct_answer} index={index} isSelected={selected === ans ? true : false} text={ans} selectAnswer={selectAnswer} />
    })
    
    return (
        <div className='questioncont'>
            <span className='question'>{decode(question)}</span>
            <div className='answerscont'>
                {answersElem}
            </div>
            <div className='separator'></div>
        </div>
    )
}

export default Question