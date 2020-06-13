import React from 'react'
import Wrapper from '../../../hoc/wrapper'
import Class from './Modal.module.css'

const modal = (props)=> {
    return (
        <div className= {Class.Modal}>
            {props.children}
        </div>
    )
}

export default modal;
