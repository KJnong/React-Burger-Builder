import React from 'react'
import classes from './Logo.module.css'
import logo from '../../assets/images/original.png'

const Logo = (props)=> {
    return (
        <div className={classes.Logo}>
            <img src = {logo} alt='MyBurger'/>
        </div>
    )
}

export default Logo;
