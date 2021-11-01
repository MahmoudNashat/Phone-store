import React, { Component } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css"
import { Switch, Route } from 'react-router';
import Cart from "./Components/Cart/Cart";
import Details from "./Components/Details";
import Default from "./Components/Default";
import Navbar from './Components/Navbar';
import ProductsList from './Components/ProductsList';
import Modal from './Components/Modal';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/Cart" component={Cart}/>
          <Route exact path="/" component={ProductsList}/>
          <Route path="/Details" component={Details}/>
          <Route component={Default}/>
        </Switch>
        <Modal />
      </React.Fragment>
    )
  }
}