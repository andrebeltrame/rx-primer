import React from 'react'
import ButtonItem from './style';


export const Button = ({ className, children }) => {
    return (
        <ButtonItem className={'btn ' + className }>{children}</ButtonItem>
    )
}


