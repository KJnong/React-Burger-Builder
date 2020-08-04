import React, { Component } from 'react'
import Burger from "../../Components/Burger/Burger"
import Wrapper from "../../hoc/wrapper"
import BuildControls from "../../Components/Burger/BuildControls/BuildControls"
import Modal from '../../Components/UI/Modal/Modal'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'
import axios from "../../axios-orders"
import Spinner from "../../assets/Spinner/Spinner"
import WrapperComponent from "../../hoc/withErrorHandler/withErrorHandler"

const INGREDIENT_PRICES = {
    meat: 15,
    bacon: 10,
    cheese: 5,
    salad: 3
}
class BurgerBuilder extends Component {

    // When there is no wifi connection
    // state = {
    //     ingredients: {
    //         meat: 0,
    //         bacon: 0,
    //         cheese: 0,
    //         salad: 0
    //     },
    //     price: 15,
    //     orderPermission: false,
    //     orderMode: false,
    //     spinner: false,
    //     error: false

    // }

    state = {
        ingredients: null,
        price: 15,
        orderPermission: false,
        orderMode: false,
        spinner: false,
        error: false

    }

    async componentDidMount(){

        await axios.get("/ingredients.json").then(response =>{
            this.setState({ingredients: response.data})

        }).catch(error =>{
            this.setState({error: true})
        })
    }

    updateOrderPermission(newIngredients) {
        const items = { ...newIngredients }
        const sum = Object.keys(items)
            .map(igKey => items[igKey])
            .reduce((sum, current) => sum + current, 0);
        this.setState({ orderPermission: sum > 0 })
    }


    addIngredient = (type) => {
        const newIngredients = { ...this.state.ingredients }
        const updatedCount = newIngredients[type] + 1
        newIngredients[type] = updatedCount
        const newPrice = this.state.price + INGREDIENT_PRICES[type]

        this.setState({ ingredients: newIngredients, price: newPrice })
        this.updateOrderPermission(newIngredients)
    }

    removeIngredient = (type) => {
        const newIngredients = { ...this.state.ingredients }
        const oldCount = newIngredients[type]
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = newIngredients[type] - 1
        newIngredients[type] = updatedCount
        const newPrice = this.state.price - INGREDIENT_PRICES[type]

        this.setState({ ingredients: newIngredients, price: newPrice })
        this.updateOrderPermission(newIngredients)
    }

    orderModeHandler = () => {
        this.setState({ orderMode: true })
    }

    orderCancellationHandler = () => {
        this.setState({ orderMode: false })
    }

    continueOrderHandler = async () => {
        // this.setState({spinner: true})

        // const order = {
        //     ingredients: this.state.ingredients,
        //     price : this.state.price,
        //     customer : {
        //         name: "Jethro Nong",
        //         adress : {
        //             street: "Von Willich",
        //             city:"Centurion",
        //             post:'0062'
        //         },
        //     email:"nongjethro@gmail.com"    
        //     },
        //     deliveryMethod: "Delivery"
        // }


        // await axios.post("/orders.json", order)
        // .then((response)=>{
        //     this.setState({spinner: false});
        //     this.setState({orderMode: false})
        //     console.log(response);

        // }).catch(error=>{
        //     this.setState({spinner: false});
        //     this.setState({orderMode: false})
        //     console.log(error);
        // })

        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(i + '=' + this.state.ingredients[i])
        }

        queryParams.push("price=" + this.state.price)
        const queryString = queryParams.join('&');

        this.props.history.push({
            pathname: "/checkout",
            search: '?' + queryString
        })
    }



    render() {

        const buttonDisplayInfo = { ...this.state.ingredients }

        for (let key in buttonDisplayInfo) {
            buttonDisplayInfo[key] = buttonDisplayInfo[key] <= 0
        }


        const burger = this.state.ingredients ? (
            <Wrapper>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIngredient={this.addIngredient}
                    removeIngredient={this.removeIngredient}
                    buttonDisplayInfo={buttonDisplayInfo}
                    price={this.state.price}
                    orderPermission={this.state.orderPermission}
                    ordered={this.orderModeHandler}
                />
            </Wrapper>
        ) : this.state.error ? <p>Failed to laod ingredients</p> : <Spinner />

        const OrderDisplay = this.state.spinner ? <Spinner /> : <OrderSummary
            price={this.state.price}
            order={this.state.ingredients}
            continueOrder={this.continueOrderHandler}
            cancelOrder={this.orderCancellationHandler} />

        return (
            <Wrapper>
                <Modal show={this.state.orderMode} modalClosed={this.orderCancellationHandler}>
                    {OrderDisplay}
                </Modal>
                {burger}
            </Wrapper>
        )
    }
}

export default WrapperComponent(BurgerBuilder, axios);
