import React from 'react'
import Classes from "./Burger.module.css"
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"
 
const Burger= (props)=> {
    return (
        <div className={Classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default Burger;