import React, { Component } from 'react'
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary'
import InfoData from './InfoData/InfoData'
import {Route} from 'react-router-dom'

class Checkout extends Component {

    state = {ingredients : {},
            price: null
}

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let totalPrice = null

        for (let params of query.entries()){
            if (params[0] === "price") {
                totalPrice = +params[1]
            }else{
                ingredients[params[0]] = +params[1] 
            }
                    
        }
        this.setState({ingredients: ingredients, price: totalPrice})

      
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
                       component ={()=><InfoData {...this.props} 
                                                 price = {this.state.price}
                                                 ingredients = {this.state.ingredients}/>}/>
            </div>
        )
    }
}

export default Checkout;