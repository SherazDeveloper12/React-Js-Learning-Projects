import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';   
import About from '../pages/about us/AboustUs';
import Contact from '../pages/contact us/ContactUs';
import Shop from '../pages/shop/Shop';
export default function Navigation() {
  return (
<BrowserRouter> <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} /> {/* Catch-all for 404 */}
      </Routes> </BrowserRouter>  
  );
}