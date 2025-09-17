import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';   
import About from '../pages/about us/AboustUs';
import Contact from '../pages/contact us/ContactUs';
import Shop from '../pages/shop/Shop';
import Admin from '../pages/admin/Admin';
import Products from "../pages/admin/adminpages/products/Products"
import Blogs from "../pages/admin/adminpages/blogs/Blogs"
import Users from "../pages/admin/adminpages/users/Users"
export default function Navigation() {
  return (
<BrowserRouter> <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} /> {/* Catch-all for 404 */}
        <Route path="/admin" element={<Admin />} /> {/* Catch-all for 404 */}
        <Route path="/blogs" element={<Blogs />} /> {/* Catch-all for 404 */}
        <Route path="/products" element={<Products />} /> {/* Catch-all for 404 */}
        <Route path="/users" element={<Users />} /> {/* Catch-all for 404 */}
      </Routes> </BrowserRouter>  
  );
}