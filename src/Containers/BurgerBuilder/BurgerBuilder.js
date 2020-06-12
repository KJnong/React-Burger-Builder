import React, { Component } from 'react'
import Burger from "../../Components/Burger/Burger"
import Wrapper from "../../hoc/wrapper"
import BuildControls from "../../Components/Burger/BuildControls/BuildControls"

const INGREDIENT_PRICES = {
    meat: 15,
    bacon: 10,
    cheese: 5,
    salad: 3
}
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0,
        },
        price: 15,
        orderPermission: false
    }

    updateOrderPermission(newIngredients){
        const items = {...newIngredients}
        const sum = Object.keys(items)
                        .map(igKey => items[igKey] )
                        .reduce((sum, current)=> sum + current , 0);
        this.setState({orderPermission: sum > 0})              
    }


    addIngredient = (type) => {
        const newIngredients = { ...this.state.ingredients }
        const updatedCount = newIngredients[type] + 1
        newIngredients[type] = updatedCount
        const newPrice = this.state.price + INGREDIENT_PRICES[type]

        this.setState({ ingredients: newIngredients, price: newPrice })
        this.updateOrderPermission(newIngredients)
    }

    removeIngredient = (type) => {
        const newIngredients = { ...this.state.ingredients }
        const oldCount = newIngredients[type]
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = newIngredients[type] - 1
        newIngredients[type] = updatedCount
        const newPrice = this.state.price - INGREDIENT_PRICES[type]

        this.setState({ ingredients: newIngredients, price: newPrice })
        this.updateOrderPermission(newIngredients)
    }

    render() {
        const buttonDisplayInfo = { ...this.state.ingredients }

        for (let key in buttonDisplayInfo) {
            buttonDisplayInfo[key] = buttonDisplayInfo[key] <= 0
        }
        return (
            <Wrapper>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    addIngredient={this.addIngredient}
                    removeIngredient={this.removeIngredient}
                    buttonDisplayInfo={buttonDisplayInfo}
                    price = {this.state.price}
                    orderPermission = {this.state.orderPermission}
                />
            </Wrapper>
        )
    }
}

export default BurgerBuilder;
