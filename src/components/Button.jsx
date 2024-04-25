import React from 'react'


const Button = ( {children, style, onClick, className, id }) =>{
    return <button style={style} onClick={onClick} id={id} className={className}>{children}</button>
    
}
export default Button;