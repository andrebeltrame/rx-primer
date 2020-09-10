import React from 'react';
import FormField from './style'

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
    return (
        <FormField>
            <label htmlFor={name}>
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {error && <p className="error">{error}</p>}
        </FormField>
    );
};

export default Input;
