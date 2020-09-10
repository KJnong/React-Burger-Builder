import * as actionTypes from './actions';

const INGREDIENT_PRICES = {
    meat: 15,
    bacon: 10,
    cheese: 5,
    salad: 3
}

const initialState = {
    ingredients: {
                meat: 0,
                bacon: 0,
                cheese: 0,
                salad: 0
            },
            price: 15
}

const reducer = (state= initialState, action)=>{

    switch (action.type) {
        case (actionTypes.ADD_INGREDIENT): 
        return{
            ...state,
            ingredients:{
                ...state.ingredients,
                [action.ingredientName] : state.ingredients[action.ingredientName] + 1 
            },
            price: state.price + INGREDIENT_PRICES[action.ingredientName]
        };
        case (actionTypes.REMOVE_INGREDIENT): 
        return{
            ...state,
            ingredients:{
                ...state.ingredients,
                [action.ingredientName] : state.ingredients[action.ingredientName] - 1 
            },
            price: state.price - INGREDIENT_PRICES[action.ingredientName]
        };
        
        default:
            return state
    }	
}

export default reducer;