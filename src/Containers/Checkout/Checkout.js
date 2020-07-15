import React, { Component } from 'react'
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary'

class Checkout extends Component {

    state = {ingredients : {}}

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};

        for (let params of query.entries()){
             ingredients[params[0]] = +params[1]        
        }
        this.setState({ingredients: ingredients})
      
    }

    CheckoutContinueEventHandler = ()=>{
        
    }

    CancelContinueEventHandler = ()=>{
        this.props.history.goBack();
    }

    render() {
        console.log(this.props.location.state);
        return (
            <div>
                <CheckoutSummary ingredients = {this.state.ingredients}
                                cancelOrder = {this.CancelContinueEventHandler}
                                continueOrder = {this.CancelContinueEventHandler}
                />
            </div>
        )
    }
}

export default Checkout;