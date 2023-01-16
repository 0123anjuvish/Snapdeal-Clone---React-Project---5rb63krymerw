import React from 'react'
import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Payment from './pages/Payment';
import Product from './pages/Product';
import Account from './pages/Account';
import Cart from './pages/Cart';

import Header from './Header';

const App = () => {


  return (
    <div id="main">
      <BrowserRouter>
      <Header/>
      <Routes>
   
      <Route exact path = "/" element={<Catalog/>} > </Route>
      <Route exact path = "/cart" element={<Cart/>} > </Route>
      <Route exact path = "/product" element={<Product/>} > </Route>
      <Route exact path = "/payment" element={<Payment/>} > </Route>
      <Route exact path = "/account" element={<Account/>} > </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
