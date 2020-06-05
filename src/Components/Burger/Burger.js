import React from 'react'
import Classes from "./Burger.module.css"
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"
 
const Burger= (props)=> {
    return (
        <div className={Classes.Burger}>
            <BurgerIngredient type="BreadTop"/>
            <BurgerIngredient type="Meat"/>
            <BurgerIngredient type="Cheese"/>
        </div>
    )
}

export default Burger;