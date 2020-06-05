import React, { Component } from 'react'
import Burger from "../../Components/Burger/Burger"
import Wrapper from "../../hoc/wrapper"

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
                <div>Burger Controls </div>
            </Wrapper>
        )
    }
}

export default BurgerBuilder;
