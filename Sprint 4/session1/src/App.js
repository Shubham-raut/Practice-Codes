import React from 'react';
// import logo from './logo.svg';

import './App.css';
import Outer from './components/Context Simple/Outer';
import ABlock from './components/Context states/ABlock';
import MyProvider from './components/Context states/MyProvider';
import Parent from './components/refs/Parent';
// import Users from './components/users/Users';
// import Home from './components/home/Home';
// import Restaurants from './components/restaurants/Restaurants';
// import Projects from './components/projects/Projects';
// import Contact from './components/contact/Contact';
// import { Route, Link } from 'react-router-dom';
// import Navbar from './components/navbar/Navbar';
// import Try from './components/Try/Try';
// import Dish from './components/cart/Dish';


function App() {
  return (
    <>
      {/* <p>In App.js</p>
      <Outer />
      <MyProvider>
        <ABlock />
      </MyProvider> */}
      <Parent />
    </>
  );
}

export default App;
