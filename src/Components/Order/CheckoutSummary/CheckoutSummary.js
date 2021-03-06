import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from "./CheckoutSummary.module.css"

const CheckoutSummary = (props) => {
    return (
        <div className = {classes.CheckoutSummary}>
            <p>Are you appy with your order?</p>
            <div style={{ width: "100%", margin: "auto" }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger"
                    clicked = {props.cancelOrder}
            >Cancel</Button>
            <Button btnType="Success"
                    clicked = {props.continueOrder}
            >Order</Button>
        </div>
    )
}

export default CheckoutSummary;