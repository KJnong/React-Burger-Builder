import React from 'react'
import Class from './Modal.module.css'
import BackDrop from '../../UI/BackDrop/BackDrop'
import Wrapper from '../../../hoc/wrapper'

const modal = (props) => {
    return (
        <Wrapper>
            <BackDrop show ={props.show} clicked ={props.modalClosed} />
            <div className={Class.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Wrapper>
    )
}

export default modal;
