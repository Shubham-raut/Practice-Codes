import React, { Component } from 'react';

export const addToCart = (dataStore, element) => {
  if (!(element.dish_id in dataStore)) {
    let quantity = 1;
    dataStore[element.dish_id] = { 'name': element.name, 'price': element.price, 'quantity': quantity };
  }
  return dataStore;
}

class Cart extends Component {

  remove = (dataStore, id) => {
    delete dataStore[id];
    this.props.sendData(dataStore);
  }

  increment = (dataStore, id) => {
    dataStore[id].quantity += 1;
    this.props.sendData(dataStore);
  }

  decrement = (dataStore, id) => {
    if (dataStore[id].quantity > 1) {
      dataStore[id].quantity -= 1;
    }
    else {
      delete dataStore[id];
    }
    this.props.sendData(dataStore);
  }

  render() {
    let cartItemsList = null;
    let cartItems = Object.keys(this.props.cart);
    let tPriceList = 0;
    let tPrice = 0;
    if (cartItems.length) {
      cartItemsList = cartItems.map(item => {
        return (
          < div key={item} style={{ border: '1px solid red', position: 'relative', left: "5%", margin: '10px 0', width: '90%' }}>
            <div>Name: {this.props.cart[item].name}</div>
            <div>Price: {this.props.cart[item].price}</div>
            <div>quantity: {this.props.cart[item].quantity}</div>
            <button onClick={() => this.increment(this.props.cart, item)}>+</button>
            <button onClick={() => this.decrement(this.props.cart, item)}>-</button>
            <button onClick={() => this.remove(this.props.cart, item)}>Remove</button>
          </div >
        )
      })



      for (let item in this.props.cart) {
        tPrice += parseInt(this.props.cart[item].price.split(' ', 1)) * this.props.cart[item].quantity;
      }
      console.log(tPrice);

    }
    return (
      <div style={{ backgroundColor: '#f4f4f4', maxHeight: '550px' }}>
        <h2>Cart</h2>
        {tPrice > 0 ?
          <h3>Items: -{cartItems.length}  Total Price:- {tPrice}</h3> :
          <p>Currently, Your Cart is empty...</p>
        }
        <div style={{ width: '90%', maxHeight: '350px', position: 'relative', left: "5%", overflow: 'auto', margin: '10px 0', backgroundColor: 'wheat' }}>
          {cartItemsList}
        </div>
        {tPrice > 0 ?
          <button onClick={() => this.props.cartOrder(tPrice)}>Place Order</button> :
          null
        }
      </div >
    )
  }
}

export default Cart;
