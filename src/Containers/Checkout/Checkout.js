import React, { Component } from 'react'
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary'
import InfoData from './InfoData/InfoData'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'

class Checkout extends Component {

    //Before Redux
    // componentDidMount(){
    //     console.log(this.props);
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let totalPrice = null

    //     for (let params of query.entries()){
    //         if (params[0] === "price") {
    //             totalPrice = +params[1]
    //         }else{
    //             ingredients[params[0]] = +params[1] 
    //         }
                    
    //     }
    //     this.setState({ingredients: ingredients, price: totalPrice})

      
    // }

    CheckoutContinueEventHandler = ()=>{
        this.props.history.replace('/checkout/contact-data');
    }

    CancelContinueEventHandler = ()=>{
        this.props.history.goBack();
    }

    render() {

        return (
            <div>
                <CheckoutSummary ingredients = {this.props.ingredients}
                                cancelOrder = {this.CancelContinueEventHandler}
                                continueOrder = {this.CheckoutContinueEventHandler}
                />
                <Route path={this.props.match.path + '/contact-data'} 
                       component ={InfoData}/>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        ingredients: state.ingredients, 
        price: state.price
    }
}

export default connect(mapStateToProps)(Checkout);