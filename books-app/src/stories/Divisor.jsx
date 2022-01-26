import React from 'react'
import './Divisor.css'


const Divisor = (props) => {
const {children , ...rest} = props
    
return (
    <>
    <div className='divisor'> 
        <div className='divisor-text'  > Amigues y sus libros: </div>
        </div>
    </>
    )
}

export default Divisor
