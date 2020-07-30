import React from 'react'

const Input = ({ label, id, type, ...props }) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input id={id} placeholder={label} type={type} {...props}/>
        </>
    )
}

export default Input;
