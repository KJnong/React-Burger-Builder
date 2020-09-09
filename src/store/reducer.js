import * as ActionTypes from './actions';

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
    return state	
}

export default reducer;