import React, { Component } from 'react'
import Burger from "../../Components/Burger/Burger"
import Wrapper from "../../hoc/wrapper"
import BuildControls from "../../Components/Burger/BuildControls/BuildControls"

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0,
        }
    }

    render() {
        return (
            <Wrapper>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls/>
            </Wrapper>
        )
    }
}

export default BurgerBuilder;
