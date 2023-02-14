import { useState, useEffect } from 'react'
import { decode } from "html-entities"
import Question from './Question'
import Confetti from 'react-confetti'
import questionsraw from "../questionsgrecia"
import useWindowDimensions from '../windowadjust'


const Game = ({goStartScreen, hasStarted}) => {

    const [questions, setQuestions] = useState([])
    const [checked, setChecked] = useState(false)

    const {height, width} = useWindowDimensions()
    
    const newGame = () => {
        setChecked(false)
        setQuestions([])
        const arr = questionsraw.results.map((obj, index) =>{
            console.log(index)
            return {...obj, correct_answer: obj.correct_answer, index:index, selected: "", answers: [...obj.incorrect_answers, obj.correct_answer].sort(() => Math.random() - 0.5).map((item) => {
                return item
            })}
        })
        setQuestions(arr) 
    }

    useEffect(() => {
        newGame()
    }, [hasStarted])

    const selectAnswer = (index, ans) => {
        if(checked) {
            return
        }
        setQuestions((prev) => {
            return prev.map((q) => {
                return q.index === index ? {...q, selected: ans}: q
            })
        })
    }

    const checkAnswers = () => {
        setChecked(true)
    }

    const calcScore = () => {
        let counter = 0
        for(let i = 0; i < questions.length; i++) {
            if(questions[i].selected === questions[i].correct_answer) {
                counter++
            }
        }
        return counter
    }
    
    const questionElems = questions.map((q) => {
        return <Question key={q.index} checked={checked} {...q} selectAnswer={selectAnswer}/>
    })

    return (
        <div className="gamecont"> 
            {questions.length > 0 ? 
            <>
                {calcScore() === 5 && checked && <Confetti height={height} width={width}/>}
                {questionElems} 
                <div className='scorecont'>
                    {checked && <span className='scoretext' >You scored {calcScore()} / {questions.length} correct answers</span>}
                    <button className='scorebutton' onClick={checked ? newGame : checkAnswers}>{checked ? "Play again" :"Check answers"}</button>
                    {checked && <button className='scorebutton' onClick={goStartScreen}>{"Change category"}</button>}
                </div>
            </> 
            : 
            <h1 className='fetchingtext'>Fetching Questions...</h1>}
        </div>
    )
}



export default Game