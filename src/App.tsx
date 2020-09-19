import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CartProvider } from "utils/CartContext";
import Home from "pages/Home";
import ShoppingCart from "pages/ShoppingCart";
import MainLayout from "layouts/MainLayout";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
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
        </CartProvider>
      </Router>
      
    </div>
  );
}

export default App;
