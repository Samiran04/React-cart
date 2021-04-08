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
                  img: '',
                  id: 1
              },
              {
                  price: 400,
                  title: 'Shoes',
                  qty: 5,
                  img: '',
                  id: 2
              },
              {
                  price: 777,
                  title: 'Dress',
                  qty: 9,
                  img: '',
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
      </div>
    );
  }
}

export default App;