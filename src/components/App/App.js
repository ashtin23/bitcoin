import React, { Component } from "react";
import { Route, Link, Redirect} from "react-router-dom";
import Home from "../Home/Home";
import Currencies from "../Currencies/Currencies"
import Price from "../Price/Price"
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: null
    };
    this.setPrice = this.setPrice.bind(this);
  }

  setPrice(price) {
    this.setState({ price: price });
  }

  render() {
    return(
      <div>
        <nav>
          <Link to="/">
            <img src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt=""/>
            <h1>Bitcoin prices</h1>
          </Link>
          <Link to="/currencies">
            Currency List
          </Link>
          {/* <Link to="/price">
            Prices
          </Link> */}
        </nav>
        <main>
          <Route path="/"
            exact component={Home}
          />
          <Route path="/currencies"
            component={Currencies}
            />
          <Route path="/price/:currency"
            render={routerProps => <Price setPrice={this.setPrice} {...routerProps} {...this.state} />} 
            />
          <Route path="/currency" render={() => <Redirect to="/currencies" />} />
        </main>
      </div>
    )
  }
}

export default App;
