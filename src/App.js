import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Products";
import TopMenu from "./components/TopMenu";
import { CartProvider } from "./contexts/Cart";
import "./styles.css";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Switch>
          <div className="App">
            <TopMenu />
            <Route exact path="/" component={Home} />
            <Route path="/products/" component={Product} />
          </div>
        </Switch>
      </Router>
    </CartProvider>
  );
}
