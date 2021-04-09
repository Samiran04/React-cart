import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import './App.css';

class App extends React.Component {

  constructor() {

      super();

      this.state = {
          products: [
              {
                  price: 999,
                  title: 'Mobile',
                  qty: 1,
                  img: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                  id: 1
              },
              {
                  price: 400,
                  title: 'Shoes',
                  qty: 5,
                  img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                  id: 2
              },
              {
                  price: 777,
                  title: 'Watch',
                  qty: 9,
                  img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
                  id: 3
              }
          ]
      }
  }

  handleDeleteProduct = (id) => {
      console.log(id);

      const {products} = this.state;

      const items = products.filter((item) => item.id !== id);

      this.setState({
          products: items
      });
  }

  handleIncreaseQuantity = (product) => {
      console.log(product);

      const {products} = this.state;

      const index = products.indexOf(product);

      products[index].qty += 1;

      this.setState({
          products: products
      });
  }

  handleDecreasingQuantity = (product) => {
      console.log(product);

      const {products} = this.state;

      const Index = products.indexOf(product);

      if(products[Index].qty === 0)
      {
          return;
      }

      products[Index].qty -= 1;

      this.setState({
          products: products
      })
  }
  
  getCartCount = () => {
      let count = 0;

      const {products} = this.state;

      products.forEach((product) => {
        count += product.qty;
      });

      return count;
  }

  getCartTotal = () => {
      let countTotal = 0;

      const {products} = this.state;

      products.map((product) => {
          countTotal += product.qty * product.price;
      });

      return countTotal;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar 
        count = {this.getCartCount()}
        />
        <Cart 
        products = {products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreasingQuantity = {this.handleDecreasingQuantity}
        onDeletingProduct = {this.handleDeleteProduct}
        />

        <div style = {{fontSize: 20, padding: 10}}> Total: {this.getCartTotal()} </div>

      </div>
    );
  }
}

export default App;