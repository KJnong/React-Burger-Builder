import React, { Component } from 'react'
import classes from './InfoData.module.css'
import Butten from '../../../Components/UI/Button/Button'

export default class InfoData extends Component {
    render() {
        console.log("Hello world");
        return (
            <div className={classes.InfoData}>
                <div>
                    <h3>Enter your Contact Details</h3>
                </div>
                <form>
                    <input className={classes.Input} type='text' name='name' placeholder='Your Name' />
                    <input className={classes.Input} type='email' name='email' placeholder='Enter Email'/>
                    <input className={classes.Input} type='text' name='street' placeholder='Steet Adress'/>
                    <input className={classes.Input} type='text' name='postal' placeholder='Postal Adress'/>
                    <Butten btnType="Success">ORDER</Butten>
                </form>
            </div>
        )
    }
}
