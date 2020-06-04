import React from 'react'
import Wrapper from "../../hoc/wrapper"
import classes from "./Layout.css"

const Layout = (props) => {
    return (
        <Wrapper>
            <div>Navbar, hello world</div>
            <main>
                {props.children}
            </main>
        </Wrapper>
    )
}

export default Layout;