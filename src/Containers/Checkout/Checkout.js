import React, { Component } from 'react'
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary'
import InfoData from './InfoData/InfoData'
import {Route} from 'react-router-dom'

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
        this.props.history.replace('/checkout/contact-data');
    }

    CancelContinueEventHandler = ()=>{
        this.props.history.goBack();
    }

    render() {

        return (
            <div>
                <CheckoutSummary ingredients = {this.state.ingredients}
                                cancelOrder = {this.CancelContinueEventHandler}
                                continueOrder = {this.CheckoutContinueEventHandler}
                />
                <Route path={this.props.match.path + '/contact-data'} 
                       component ={InfoData}/>
            </div>
        )
    }
}

export default Checkout;