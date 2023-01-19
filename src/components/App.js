import React from 'react'
import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Payment from './pages/Payment';
import Product from './pages/Product';
import Account from './pages/Account';
import Cart from './pages/Cart';
import { useState } from 'react';
import Header from './Header';
import ProductItem from './reuse/ProductItem';

const App = () => {

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };



  return (
    <div id="main">
      <BrowserRouter>
      <Header/>
      {/* <Account /> */}
      {/*  setShow={setShow} size={cart.length} */}
      {/* {show ? (
        <ProductItem handleClick={handleClick} />
      ) :  (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )} */}
      {/* <Catalog /> */}
      {/* <Product /> */}
      <Routes>
   
      <Route exact path = "/" element={<Catalog/>} > </Route>
      <Route exact path = "/cart" element={<Cart/>} > </Route>
      <Route exact path = "/product" element={<Product/>} > </Route>
      <Route exact path = "/payment" element={<Payment/>} > </Route>
      {/* <Route exact path = "/account" element={<Account/>} > </Route> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
