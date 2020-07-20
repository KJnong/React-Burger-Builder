import React from 'react';
import Layout from "./Components/Layout/Layout"
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder"
import Checkout from './Containers/Checkout/Checkout'
import Orders from "./Containers/Orders/Orders"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route exact path="/" component={BurgerBuilder} />
        </Switch>
      </Layout>
    );
  }
}

export default App;