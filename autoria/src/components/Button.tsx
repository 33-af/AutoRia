import React, { FC } from 'react'
type ButtonProps = {
    text: string
    type: 'button' | 'submit' | 'reset';
}

const Button: FC<ButtonProps> = ({ type = "button", text }) => {
    return (
        <button
            type={type}
            className='btn'
        >
            {text}
        </button>
    )
}

export default Button
