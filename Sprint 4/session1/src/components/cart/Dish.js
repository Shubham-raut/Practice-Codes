import React, { Component } from 'react';
import './Dish.css';
import { dishDataObj } from './DishData';
import Cart, { addToCart } from './Cart';
import DishItems from './DishItems';

class Dish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resDishData: [],
            dishData: [],
            cart: {}
        }
    }

    componentDidMount() {
        this.setState({ resDishData: dishDataObj(), dishData: [...dishDataObj().daily_menu][0].dishes })
    }

    addToCartHandlor = (id) => {
        this.state.dishData.filter(a => {
            if (a.dish_id === id) {
                let x = addToCart(this.state.cart, a);
                this.setCart(x);
            }
        })
    }

    setCart = (data) => {
        this.setState({ cart: data })
    }
    cartOrder = (tPrice) => {
        alert('Your order of Rs ' + tPrice + '. is Placed');
    }

    render() {
        console.log(this.state.cart);

        let list;
        if (this.state.dishData !== null) {
            list = this.state.dishData.map((item) => {
                return (
                    <DishItems
                        name={item.name}
                        price={item.price}
                        key={item.dish_id}
                        id={item.dish_id}
                        addToCartHandlorX={this.addToCartHandlor}
                    />
                )
            })
        }

        return (
            <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr' }}>
                <div>
                    <h1>Dishes</h1>
                    <div className='dishContainer'>
                        {list}
                    </div>
                </div>
                <Cart
                    cart={this.state.cart}
                    sendData={this.setCart}
                    cartOrder={this.cartOrder}
                />

            </div>
        );
    }
}

export default Dish;
