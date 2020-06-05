import React, { Component } from 'react'
import Burger from "../../Components/Burger/Burger"
import Wrapper from "../../hoc/wrapper"

class BurgerBuilder extends Component {
    render() {
        return (
            <Wrapper>
                <Burger />
                <div>Burger Controls </div>
            </Wrapper>
        )
    }
}

export default BurgerBuilder;
