import React from 'react';
import './App.css';
import products from './productsAll';
import Header from './Components/Header';
import Basket from './Components/Basket';
import Products from './Components/Products';
import { connect } from 'react-redux';
import { SET_PRODUCTS } from './store'

class App extends React.Component {
  componentDidMount() {
    const { setProducts } = this.props;
    setProducts(products);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Basket />
        <Products />
      </div>
    );
  }
}


const mapDispatch = (dispatch) => ({
  setProducts: (products) => dispatch({ type: SET_PRODUCTS, products: products }),
});

export default connect(null, mapDispatch)(App);
