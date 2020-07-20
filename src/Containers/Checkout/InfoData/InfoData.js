import React, { Component } from 'react'
import classes from './InfoData.module.css'
import Butten from '../../../Components/UI/Button/Button'
import Spinner from "../../../assets/Spinner/Spinner"
import axios from "../../../axios-orders"

export default class InfoData extends Component {
 
    state = {
        loading:false
    }

    OrderHandler = async(event)=>{
        event.preventDefault();
         this.setState({loading: true})

        const order = {
            ingredients: this.props.ingredients,
            price : this.props.price,
            customer : {
                name: "Jethro Nong",
                adress : {
                    street: "Von Willich",
                    city:"Centurion",
                    post:'0062'
                },
            email:"nongjethro@gmail.com"    
            },
            deliveryMethod: "Delivery"
        }


        await axios.post("/orders.json", order)
        .then((response)=>{
            this.setState({loading: false});
            this.props.history.push("/")
            
        }).catch(error=>{
            this.setState({loading: false});
        })


    }
    render() {

        let form = !this.state.loading? (
            <form>
                    <input className={classes.Input} type='text' name='name' placeholder='Your Name' />
                    <input className={classes.Input} type='email' name='email' placeholder='Enter Email'/>
                    <input className={classes.Input} type='text' name='street' placeholder='Steet Adress'/>
                    <input className={classes.Input} type='text' name='postal' placeholder='Postal Adress'/>
                    <Butten clicked = {this.OrderHandler} btnType="Success">ORDER</Butten>
                </form>
        ) : <Spinner/>

        return (
            <div className={classes.InfoData}>
                <div>
                    <h3>Enter your Contact Details</h3>
                </div>
                {form}
            </div>
        )
    }
}
