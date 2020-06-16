import React from 'react'
import Wrapper from "../../hoc/wrapper"
import Classes from "./Layout.module.css"
import Toolbar from '../Navigation/Toolbar/Toolbar'

const Layout = (props) => {
    return (
        <Wrapper>
            <Toolbar/>
            <main className={Classes.Content}>
                {props.children}
            </main>
        </Wrapper>
    )
}

export default Layout;