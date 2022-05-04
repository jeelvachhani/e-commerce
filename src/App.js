import React from 'react';
import './App.css';
import NavBar from "./component/NavBar";
import Error from './component/Error';
import Popular from './component/Popular';
import Home from './component/Home';
import Checkout from './component/Checkout';
import Fetchapi from './component/Fetchapi';
import Pizza from './component/Pizza';

// import Checkout from './component/Checkout';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Popular" component={Popular} />
          <Route exact path="/Checkout" component={Checkout} />
          <Route exact path="/Fetchapi" component={Fetchapi} />
          <Route exact path="/Pizza" component={Pizza} />

            <Route  component={Error} />

          </Switch>
        </div>
      </Router>
      
    </>
  );
}



export default App;