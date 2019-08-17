import React from 'react';
import './App.css';
import products from './productsAll';
import Header from './Components/Header';
import Cart from './Components/Cart';
import Products from './Components/Products';
import { connect } from 'react-redux';
import { setProducts } from './redux/products'

class App extends React.Component {
  componentDidMount() {
    const { setProducts } = this.props;
    setProducts(products);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Cart />
        <Products />
      </div>
    );
  }
}


const mapDispatch = (dispatch) => ({
  setProducts: (products) => dispatch(setProducts(products)),
});

export default connect(null, mapDispatch)(App);
