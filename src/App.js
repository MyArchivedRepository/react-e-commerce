import React from 'react';
import HomePage from "./components/pages/homepage/homepage"
import HatsPage from "./components/pages/hats/hats"
import ClothesPage from "./components/pages/clothes/clothes"
import ShoesPage from "./components/pages/shoes/shoes"
import MensPage from "./components/pages/mens/mens"
import WomensPage from "./components/pages/womens/womens"
import ShopPage from "./components/pages/shoppage/shoppage"
import {Route} from "react-router-dom";


import './App.css';

const Product = () => (
  <div>555</div>
)



function App() {
  return (
    <div >
      <Route exact={true} path="/" component = {HomePage} />
      <Route exact={true} path="/shop" component = {ShopPage} />
      <Route exact={true} path="/shop/hats" component = {HatsPage} />
      <Route exact={true} path="/shop/clothes" component = {ClothesPage} />
      <Route exact={true} path="/shop/shoes" component = {ShoesPage} />
      <Route exact={true} path="/shop/mens" component = {MensPage} />
      <Route exact={true} path="/shop/womens" component = {WomensPage} />
      <Route exact={true} path="/shop/hats/:prodId" component = {Product} />
      
    </div>
  );
}

export default App;
