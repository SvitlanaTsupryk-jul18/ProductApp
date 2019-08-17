import React from 'react';
import './App.scss';
import products from './productsAll';
import Header from './Components/Header';
import Cart from './Components/Cart';
import Products from './Components/Products';
import { connect } from 'react-redux';
import { setProducts } from './redux/products';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  componentDidMount() {
    const { setProducts } = this.props;
    setProducts(products);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    );
  }
}


const mapDispatch = (dispatch) => ({
  setProducts: (products) => dispatch(setProducts(products)),
});

export default connect(null, mapDispatch)(App);
