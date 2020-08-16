import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

import Currencies from "./pages/currencies/Currencies"
import Currency from "./pages/currency/Currency"
import Header from "./components/Header"

function App() {
  return (
    <>
      <Header>
        <Link to='/'>CRYPTOCURRENCIES</Link>
      </Header>
      <Switch>
        <Route exact path="/">
          <Redirect to="/1" />
        </Route>
        <Route component={Currency} path="/currency/:id" />
        <Route component={Currencies} path="/:pageNumber" />
      </Switch>
    </>
  );
}

export default App