import React from 'react'
import Wrapper from '../../../hoc/wrapper'
import Button from '../../UI/Button/Button'

const orderSummary = (props)=> {

    const ingredientSummary = Object.keys({...props.order})
                                    .map(igKey =>{ return (
                                    <li key={igKey}>
                                        <span style={{textTransform:"capitalize"}}>{igKey}</span> : {props.order[igKey]}
                                    </li>
                                    )})

    return (
        <Wrapper>
            <h3 style={{textAlign:"center"}}>Order</h3>
            <p>Your Burger has the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p style={{textAlign:'center'}}>Total Price : <strong>R{props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType = "Danger" clicked = {props.cancelOrder}>CANCEL</Button>
            <Button btnType = "Success" clicked = {props.continueOrder}>CONTINUE</Button>
        </Wrapper>
    )
}

export default orderSummary
