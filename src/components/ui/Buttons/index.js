import React from 'react'
import ButtonItem from './style';


export const Button = ({ className, children, ...props }) => {
    return (
        <ButtonItem {...props} className={'btn ' + className }>{children}</ButtonItem>
    )
}


