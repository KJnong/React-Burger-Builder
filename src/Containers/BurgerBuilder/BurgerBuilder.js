import React, { Component } from 'react'
import {connect} from 'react-redux'

import Burger from "../../Components/Burger/Burger"
import Wrapper from "../../hoc/wrapper"
import BuildControls from "../../Components/Burger/BuildControls/BuildControls"
import Modal from '../../Components/UI/Modal/Modal'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'
import axios from "../../axios-orders"
import Spinner from "../../assets/Spinner/Spinner"
import WrapperComponent from "../../hoc/withErrorHandler/withErrorHandler"
import * as actionTypes from '../../store/actions'


class BurgerBuilder extends Component {

    // When there is no wifi connection
    // state = {
    //     ingredients: {
    //         meat: 0,
    //         bacon: 0,
    //         cheese: 0,
    //         salad: 0
    //     },
    //     price: 15,
    //     orderPermission: false,
    //     orderMode: false,
    //     spinner: false,
    //     error: false

    // }

    state = {
        // ingredients: null,
        // price: 15,
        orderPermission: false,
        orderMode: false,
        spinner: false,
        error: false

    }

    async componentDidMount(){

        await axios.get("/ingredients.json").then(response =>{
            this.setState({ingredients: response.data})

        }).catch(error =>{
            this.setState({error: true})
        })
    }

    updateOrderPermission(newIngredients) {
        const items = { ...newIngredients }
        const sum = Object.keys(items)
            .map(igKey => items[igKey])
            .reduce((sum, current) => sum + current, 0);
        return sum > 0 
    }

    //before redux
    // addIngredient = (type) => {
    //     const newIngredients = { ...this.state.ingredients }
    //     const updatedCount = newIngredients[type] + 1
    //     newIngredients[type] = updatedCount
    //     const newPrice = this.state.price + INGREDIENT_PRICES[type]

    //     this.setState({ ingredients: newIngredients, price: newPrice })
    //     this.updateOrderPermission(newIngredients)
    // }

    // removeIngredient = (type) => {
    //     const newIngredients = { ...this.state.ingredients }
    //     const oldCount = newIngredients[type]
    //     if (oldCount <= 0) {
    //         return;
    //     }
    //     const updatedCount = newIngredients[type] - 1
    //     newIngredients[type] = updatedCount
    //     const newPrice = this.state.price - INGREDIENT_PRICES[type]

    //     this.setState({ ingredients: newIngredients, price: newPrice })
    //     this.updateOrderPermission(newIngredients)
    // }

    orderModeHandler = () => {
        this.setState({ orderMode: true })
    }

    orderCancellationHandler = () => {
        this.setState({ orderMode: false })
    }

    continueOrderHandler = async () => {

        this.props.history.push({
            pathname: "/checkout"
        })
    }



    render() {

        const buttonDisplayInfo = { ...this.props.ingredients }

        for (let key in buttonDisplayInfo) {
            buttonDisplayInfo[key] = buttonDisplayInfo[key] <= 0
        }


        const burger = this.props.ingredients ? (
            <Wrapper>
                <Burger ingredients={this.props.ingredients} />
                <BuildControls
                    addIngredient={this.props.addIngredient}
                    removeIngredient={this.props.removeIngredient}
                    buttonDisplayInfo={buttonDisplayInfo}
                    price={this.props.price}
                    orderPermission={this.updateOrderPermission(this.props.ingredients)}
                    ordered={this.orderModeHandler}
                />
            </Wrapper>
        ) : this.state.error ? <p>Failed to laod ingredients</p> : <Spinner />

        const OrderDisplay = this.state.spinner ? <Spinner /> : <OrderSummary
            price={this.props.price}
            order={this.props.ingredients}
            continueOrder={this.continueOrderHandler}
            cancelOrder={this.orderCancellationHandler} />

        return (
            <Wrapper>
                <Modal show={this.state.orderMode} modalClosed={this.orderCancellationHandler}>
                    {OrderDisplay}
                </Modal>
                {burger}
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        ingredients: state.ingredients, 
        price: state.price
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        addIngredient: (name) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: name}),
        removeIngredient: (name) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: name})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrapperComponent(BurgerBuilder, axios));
