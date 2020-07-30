import React from 'react'
import FormField from './style'

const Input = ({ label, id, type, ...props }) => {
    return (
        <FormField>
            <div className="formField">
                <label htmlFor={id}>{label}</label>
                <input id={id} placeholder={label} type={type} {...props}/>
            </div>
        </FormField>
    )
}

export default Input;
