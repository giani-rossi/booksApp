import React from 'react';
import '../stories/button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = (props) => {
  
  const {variant = 'primary-default', children , ...rest } = props
  
  return (
    <>
    <button className={`button ${variant}`} {...rest}>{children}</button>
      
    

      
  </>
  )
  
};

