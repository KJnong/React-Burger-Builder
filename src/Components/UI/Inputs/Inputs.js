import React from 'react'
import classes from './Inputs.module.css'

const inputs = (props)=> {
    let inputElement = null;

    switch (props.inputType) {
        case "input":
            inputElement= <input 
                            className={classes.InputElement} 
                            {...props.elementConfiq}
                            onChange={props.changed}
                            />
            break;

        case "textarea":
            inputElement= <textarea
                             className={classes.InputElement} 
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
