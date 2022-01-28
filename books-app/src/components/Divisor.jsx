import React from 'react'
import '../stories/Divisor.css'


const Divisor = (props) => {
const { variant='amigues' ,text , children , variant2='copy', ...rest} = props
    
return (
    <>
  
  <div className={`divisor ${variant2}`}> 
        <div className={`divisor-text ${variant}`}  > {text}</div>
        </div>
   
    </>
    )
}

export default Divisor
