import React from 'react'
import classes from './SideDrawer.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import BackDrop from '../../UI/BackDrop/BackDrop'
import Wrapper from '../../../hoc/wrapper'

const SideDrawer = (props) => {

        let attachedClasses = [classes.SideDrawer, classes.Close];

        if (props.open) {
            attachedClasses = [classes.SideDrawer, classes.Open];
        }

        return (
            <Wrapper>
                <BackDrop show={props.open} clicked={props.closed} />
                <div className={attachedClasses.join(' ')}>
                    <div className={classes.Logo}>
                        <Logo />
                    </div>
                    <nav>
                        <NavigationItems />
                    </nav>
                </div>




            </Wrapper>
        )
    }

    export default SideDrawer;