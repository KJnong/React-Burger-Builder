import React from 'react'
import Wrapper from '../../../hoc/wrapper'

const orderSummary = (props)=> {

    const ingredientSummary = Object.keys({...props.order})
                                    .map(igKey =>{ return (
                                    <li>
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
            <p>Continue to Checkout?</p>
        </Wrapper>
    )
}

export default orderSummary
