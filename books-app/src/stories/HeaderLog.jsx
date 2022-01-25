import React from 'react';
import './HeaderLog.css'

const HeaderLog = (props) => {

const {children , ...rest} = props

    return (
        <>
            <h1 className='header-log' > Libris</h1>
        </>
    )
}

export default HeaderLog
