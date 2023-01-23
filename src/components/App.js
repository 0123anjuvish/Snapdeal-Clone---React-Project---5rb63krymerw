import React from 'react'
import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';

import Product from './pages/Product';
import Account from './pages/Account';
import Cart from './pages/Cart';
import { useState } from 'react';
import Header from './Header';
import ProductItem from './reuse/ProductItem';

const App = () => {

  
  return (
    <div id="main">
      <BrowserRouter>
      <Header/>
    
      <Routes>
   
      <Route exact path = "/" element={<Catalog/>} > </Route>
      <Route exact path = "/cart" element={<Cart/>} > </Route>
      <Route exact path = "/product/:id" element={<Product/>} > </Route>
      
       <Route exact path = "/account" element={<Account/>} > </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
