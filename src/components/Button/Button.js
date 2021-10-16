import React from 'react'
import './button.css'

const Button = ({disabled, submitBtn}) => {
    return (
        <div>
            <button 
                disabled={disabled}
                onClick={submitBtn}
                className='btn'
            >
                Submit
            </button>
        </div>
    )
}

export default Button
