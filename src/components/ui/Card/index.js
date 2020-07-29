import React  from 'react'
import CardItem from './style';

const Card = ({ className, children }) => {
    return (
        <>
        <CardItem className={'widget ' + className}>
            {children}
        </CardItem>
        </>
    )
}

export default Card





