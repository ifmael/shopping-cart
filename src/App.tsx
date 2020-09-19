import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "pages/Home";
import ShoppingCart from "pages/ShoppingCart";
import MainLayout from "layouts/MainLayout";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <MainLayout>
          <Switch>
            <Route path="/" exact > 
              <Home />
            </Route>
            <Route path="/shopping-cart" exact > 
              <ShoppingCart />
            </Route>
          </Switch>
          </MainLayout>
      </Router>
      
    </div>
  );
}

export default App;
