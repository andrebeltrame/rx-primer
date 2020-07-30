import React from 'react'
import ItemTextarea from './style'

const Textarea = ({ label, id, type, ...props }) => {
    return (
        <ItemTextarea>
            <div className="formField">
                <textarea id={id} placeholder={label} {...props} />
            </div>
        </ItemTextarea>
    )
}

export default Textarea;
