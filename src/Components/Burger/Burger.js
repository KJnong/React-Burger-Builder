import React from 'react'
import Classes from "./Burger.module.css"
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"
 
const Burger = (props)=> {

    let stateIngredients = Object.keys(props.ingredients)
    .map(igKey =>{return [...Array(props.ingredients[igKey])]
        .map((_, i)=>{ return <BurgerIngredient key={igKey + i} type={igKey}/>});
    }).reduce((prev,current)=>{
        return prev.concat(current)
    },
    []);

    if (stateIngredients.length === 0) {
        stateIngredients =<p>Please start adding ingredients!</p>;
      }
    

    return (
        <div className={Classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {stateIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default Burger;