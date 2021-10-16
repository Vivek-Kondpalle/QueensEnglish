import React from 'react'
import './input.css'

const Input = ({inputAnswer, onChangeInput}) => {
    return (
        <>
            <input
                value={inputAnswer}
                onChange={onChangeInput}
                className='input'
                placeholder='Answer'
                type='text'
            />
        </>
    )
}

export default Input
