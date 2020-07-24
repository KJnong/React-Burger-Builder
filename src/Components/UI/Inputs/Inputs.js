import React from 'react'
import classes from './Inputs.module.css'

const inputs = (props)=> {
    let inputElement = null;

    switch (props.inputType) {
        case "input":
            inputElement= <input className={classes.InputElement} {...props.elementConfiq}/>
            break;

        case "textarea":
            inputElement= <textarea className={classes.InputElement} {...props.elementConfiq}/>
            break;    
    
        default:
            inputElement= null;
            break;
    }

    return (
        <div className ={classes.Input}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default inputs;
