import React from 'react';
import './App.css';
import products from './productsAll';
import Header from './Components/Header';
import Basket from './Components/Basket';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <Basket />
      <Products />
    </div>
  );
}

export default App;
