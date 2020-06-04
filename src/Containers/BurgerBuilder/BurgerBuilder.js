import React, { Component } from 'react'
import BurgerIngredients from "../../Components/Burger/BurgerIngredient"
import Wrapper from "../../hoc/wrapper"

class BurgerBuilder extends Component {
    render() {
        return (
            <Wrapper>
           <BurgerIngredients/>
           </Wrapper>
        )
    }
}

export default BurgerBuilder;
