import './question.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '../Button/Button';
import Alert from '../Alert/Alert'
import Input from '../Input/Input'

const Question = () => {

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('')
    const [inputAnswer, setInputAnswer] = useState('')
    const [alert, setAlert] = useState('')

    const getQuestionAnswer = async () => {
        try {
            const { data } = await axios.get('https://jservice.io/api/random')
            console.log(data)
            setQuestion(data[0].question)
            setAnswer(data[0].answer)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getQuestionAnswer()
    }, [])

    const submitBtn = (e) => {

        if (inputAnswer.toLowerCase() === answer.toLowerCase()) {
            setAlert('success')
            setTimeout(() => {
                setAlert('')
                getQuestionAnswer()
            }, 3000)
            setInputAnswer('')
        } else {
            setAlert('error')
            setTimeout(() => {
                setAlert('')
                getQuestionAnswer()
            }, 3000)
            setInputAnswer('')
        }
    }

    const onChangeInput = (e) => {
        setInputAnswer(e.target.value)
    }


    console.log('answer', answer)

    return (
        <div>
            {alert === 'success' && <Alert type='success' label='Correct Answer' />}
            {alert === 'error' && <Alert type='error' label='Wrong Answer' />}
            <div className='question-container'>
                <h3>Question:</h3>
                <p>{question}</p>
                <Input 
                inputAnswer={inputAnswer}
                onChangeInput={onChangeInput}
                />
                <Button
                    disabled={inputAnswer.length === 0 ? true : false}
                    submitBtn={submitBtn}
                />
            </div>
        </div>
    )
}

export default Question
