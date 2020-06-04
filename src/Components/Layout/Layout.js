import React from 'react'
import Wrapper from "../../hoc/wrapper"
import Classes from "./Layout.module.css"

const Layout = (props) => {
    return (
        <Wrapper>
            <div>Navbar, hello world</div>
            <main className={Classes.content}>
                {props.children}
            </main>
        </Wrapper>
    )
}

export default Layout;