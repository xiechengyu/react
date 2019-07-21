import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./component/header";
import Home from "./pages/home";
import Detail from "./pages/detail";
import store from "./store";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Fragment>
            <Route path="/" exact component={Home} />
            <Route path="/detail" exact component={Detail} />
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
