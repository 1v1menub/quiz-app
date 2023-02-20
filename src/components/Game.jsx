import { useState, useEffect } from 'react'
import Question from './Question'
import Confetti from 'react-confetti'
import questionsraw from "../questionsgrecia"
import useWindowDimensions from '../windowadjust'
import toast from "react-hot-toast"


const Game = ({goStartScreen, hasStarted}) => {

    const [questions, setQuestions] = useState([])
    const [checked, setChecked] = useState(questionsraw.results.map((q) => false))

    const {height, width} = useWindowDimensions()
    
    const newGame = () => {
        const shuffledquestions = questionsraw.results.sort(() => Math.random() - 0.5)
        setChecked(questionsraw.results.map((q) => {return false}))
        setQuestions([])
        const arr = shuffledquestions.map((obj, index) =>{
            return {...obj, correct_answer: obj.correct_answer, index:index, selected: "", answers: [...obj.incorrect_answers, obj.correct_answer].sort(() => Math.random() - 0.5).map((item) => {
                return item
            })}
        })
        setQuestions(arr) 
    }

    const resetGame = () => {
        toast.dismiss()
        newGame()
    }


    useEffect(() => {
        newGame()
    }, [hasStarted])

    const selectAnswer = (index, ans) => {
        if(checked[index]) {
            return
        }
        toast.dismiss()
        setQuestions((prev) => {
            return prev.map((q) => {
                return q.index === index ? {...q, selected: ans}: q
            })
        })
        setChecked((prev) => {
            return prev.map((spot, spotindex) => {
                return (spotindex === index || spot === true) ? true : false
            })
        })
        if(ans === questions[index].correct_answer) {
            toast(questions[index].correct_msg, {
                icon: questions[index].emoji,
                duration: 7000
            })
        }
        else {
            toast.error(questions[index].incorrect_msg, {
                duration: 7000
            })
        }
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
        return <Question key={q.index} checked={checked[q.index]} {...q} selectAnswer={selectAnswer}/>
    })

    return (
        <div className="gamecont"> 
            {questions.length > 0 ? 
            <>
                {calcScore() === questions.length && <Confetti height={height} width={width-30}/>}
                {questionElems} 
                <div className='scorecont'>
                    {checked.every((spot) => {return spot ? true : false}) && <span className='scoretext' >Conseguiste {calcScore()} / {questions.length} respuestas correctas, {calcScore() === questions.length ? "puntaje que refleja tu belleza 😘" : "pero tú siempre serás un 10 😘"}</span>}
                    {checked.every((spot) => {return spot ? true : false}) && <button className='scorebutton' onClick={resetGame}>Intenta nuevamente</button>}
                    {(checked.every((spot) => {return spot ? true : false}) && calcScore() === questions.length) && <a  className='form-anchor' href='https://forms.gle/jzLZch28rWizEbKAA'><button className='scorebutton2'>Seguir</button></a>}
                </div>
            </> 
            : 
            <h1 className='fetchingtext'>Fetching Questions...</h1>}
        </div>
    )
}



export default Game