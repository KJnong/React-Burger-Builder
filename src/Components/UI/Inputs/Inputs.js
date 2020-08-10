import React from 'react'
import classes from './Inputs.module.css'

const inputs = (props)=> {
    let inputElement = null;
    let classInput = [classes.InputElement]

    if (props.valid && props.touched) {
        classInput.push(classes.Invalid)
    }

    switch (props.inputType) {
        case "input":
            inputElement= <input 
                            className={classInput.join(" ")} 
                            {...props.elementConfiq}
                            onChange={props.changed}
                            />
            break;

        case "textarea":
            inputElement= <textarea
                             className={classInput.join(" ")} 
                             {...props.elementConfiq}
                            onChange={props.changed} 
                             />
            break;  
            
        case "select":
            inputElement= <select className={classes.InputElement }
                            onChange={props.changed} 
                            {...props.elementConfiq}>
                            {props.elementConfiq.options.map((option, index) =>(
                                <option key ={index} value={option.value}>
                                    {option.displayValue}
                                </option>
                            ))}         
                           </select>
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
