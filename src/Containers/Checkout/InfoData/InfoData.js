import React, { Component } from 'react'
import classes from './InfoData.module.css'
import Butten from '../../../Components/UI/Button/Button'
import Spinner from "../../../assets/Spinner/Spinner"
import axios from "../../../axios-orders"
import Input from '../../../Components/UI/Inputs/Inputs'

export default class InfoData extends Component {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfiq:{
                    type: "text",
                    placeholder: "Your Name"
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 3,
                    maxLength: 25
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfiq:{
                    type: "email",
                    placeholder: "Email"
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 3,
                    maxLength: 25
                },
                valid: false,
                touched: false

            },
            street: {
                elementType: 'input',
                elementConfiq:{
                    type: "text",
                    placeholder: "Residential Adress"
                },
                value: "",
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            city: {
                elementType: 'input',
                elementConfiq:{
                    type: "text",
                    placeholder: "City"
                },
                value: "",
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            post: {
                elementType: 'input',
                elementConfiq:{
                    type: "text",
                    placeholder: "Zip Code"
                },
                value: "",
                validation: {
                    required: true,
                    
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfiq:{
                    options:[
                        {displayValue: 'Select'},
                        {value: 'standard', displayValue: 'Standard'},
                        {value: 'fastest', displayValue: 'Fastest'}
                    ]
                },
                value: ""
            }

        },
        loading: false
    }

    checkValitity = (value, rules)=>{
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    OrderHandler = async (event) => {
        event.preventDefault();
        this.setState({ loading: true })

        const formData = {};

        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
        }

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderForm: formData
            
        }


        await axios.post("/orders.json", order)
        .then((response)=>{
            this.setState({loading: false});
            this.props.history.push("/")

        }).catch(error=>{
            this.setState({loading: false});
        })


    }

    inputChangedHandler = (event,inputIdentifier)=>{
        const updatedOrderForm = {...this.state.orderForm}

        const updatedFormElement = {...updatedOrderForm[inputIdentifier]}
        updatedFormElement.value= event.target.value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = this.checkValitity(updatedFormElement.value, updatedFormElement.validation);
        console.log(updatedFormElement);
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({orderForm: updatedOrderForm})
    }
    render() {

        const formElementsArray = [];
        for (let key in this.state.orderForm){
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = !this.state.loading ? (
            <form onSubmit={this.OrderHandler}>
                {formElementsArray.map(formElement =>(
                    <Input
                        key={formElement.id}
                        inputType={formElement.config.elementType}
                        elementConfiq={formElement.config.elementConfiq}
                        valid={!formElement.config.valid}
                        touched={formElement.config.touched}
                        value={formElement.config.value}
                        changed = {(event)=>this.inputChangedHandler(event,formElement.id)} />
                ))}
                <Butten  btnType="Success">ORDER</Butten>
            </form>
        ) : <Spinner />

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
