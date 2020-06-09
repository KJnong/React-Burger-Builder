import React, { Component } from 'react'
import Burger from "../../Components/Burger/Burger"
import Wrapper from "../../hoc/wrapper"
import BuildControls from "../../Components/Burger/BuildControls/BuildControls"

const INGREDIENT_PRICES = {
    meat: 15,
    bacon:10,
    cheese:5,
    salad:3
}
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0,
        },
        price:15
    }

    addIngredient = (type)=>{
        const newIngredients = {...this.state.ingredients}
        const updatedCount = newIngredients[type] + 1
        newIngredients[type] = updatedCount
        const newPrice = this.state.price + INGREDIENT_PRICES[type] 

        this.setState({ingredients:newIngredients, price : newPrice})
    }

    removeIngredient = (type)=>{
        const newIngredients = {...this.state.ingredients}
        const updatedCount = newIngredients[type] - 1
        newIngredients[type] = updatedCount
        const newPrice = this.state.price - INGREDIENT_PRICES[type] 

        this.setState({ingredients:newIngredients, price : newPrice})
    }
    
    render() {
        return (
            <Wrapper>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls addIngredient = {this.addIngredient}
                               removeIngredient = {this.removeIngredient}/>
            </Wrapper>
        )
    }
}

export default BurgerBuilder;
