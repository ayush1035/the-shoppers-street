import React, { Component } from 'react';
import MyHeader from './components/commonComponents/header.js'
import MyFooter from './components/commonComponents/footer'

import './css/App.css';
import HomeC from "./components/home/homeContainer.js";
import DetailC from "./components/detail/detailContainer.js";

import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <MyHeader />
        <div className="loader">
          <Switch>
            <Route exact path="/" component={HomeC} />} />
            <Route path="/details/:id" component={DetailC} />} />
            <Route path="/about" component={HomeC} />} />
            <Route path="/contactUs" component={HomeC} />} />
          </Switch>
        </div>
        <MyFooter/>

      </div>
    );
  }
}

export default App;
