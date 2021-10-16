import React from 'react'
import './alert.css'

const Alert = ({label, type}) => {
    return (
        <div>
            <p className={`py-1 ${type}`}>{label}</p>
        </div>
    )
}

export default Alert
