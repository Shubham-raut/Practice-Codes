import React from 'react';
import './Dish.css';
import { dishDataObj } from './DishData';
import Cart, { addToCart } from './Cart';
import DishItems from './DishItems';

const { useState, useEffect } = require("react");

function Dish() {
   // const [resDishData, setResDishData] = useState([]);
   const [dishData, setDishData] = useState([]);
   const [cart, setCart] = useState({});

   useEffect(() => {
      // setResDishData(dishDataObj());
      setDishData([...dishDataObj().daily_menu][0].dishes);
   }, []);

   const addToCartHandlor = (id) => {
      dishData.filter(a => {
         if (a.dish_id === id) {
            let x = addToCart(cart, a);
            setCartX(x);
         }
      })
   }

   const setCartX = (data) => {
      setCart(data);
   }
   const cartOrder = (tPrice) => {
      alert('Your order of Rs ' + tPrice + '. is Placed');
   }

   let list;
   if (dishData !== null) {
      list = dishData.map((item) => {
         return (
            <DishItems
               name={item.name}
               price={item.price}
               key={item.dish_id}
               id={item.dish_id}
               addToCartHandlorX={addToCartHandlor}
            />
         )
      })
   }

   console.log(cart);
   return (
      <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr' }}>
         <div>
            <h1>Dishes</h1>
            <div className='dishContainer'>
               {list}
            </div>
         </div>
         <Cart
            cart={cart}
            sendData={setCartX}
            cartOrder={cartOrder}
         />
      </div>
   );
}

export default Dish;
