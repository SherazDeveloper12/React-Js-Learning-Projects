
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about us/AboustUs';
import Contact from '../pages/contact us/ContactUs';
import Shop from '../pages/shop/Shop';
import Admin from '../pages/admin/Admin';
import Products from "../pages/admin/adminpages/products/Products"
import Blogs from "../pages/admin/adminpages/blogs/Blogs"
import Users from "../pages/admin/adminpages/users/Users"
import Signup from '../pages/signup/Signup';
import Login from '../pages/login/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
export default function Navigation() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/about",
      element:<PrivateRoute><About /> </PrivateRoute>
    },
    {
      path:"/contact",
         element:<Contact />
    },
    {
      path:"/shop",
      element:<Shop />
    },
    {
      path:"/admin",
      element:<PrivateRoute><Admin /></PrivateRoute>
    },
    {
      path:"/blogs",
      element:<PrivateRoute><Blogs /></PrivateRoute>
    },
    {
      path:"/products",
         element:<PrivateRoute><Products /></PrivateRoute>
    },
    {
      path:"/users",
      element:<PrivateRoute><Users /></PrivateRoute>
    },
    {
      path:"/signup",
      element: <PublicRoute><Signup /></PublicRoute>
    },
    {
      path:"/login",
      element:<PublicRoute><Login /></PublicRoute>
    },
  ])
  return (

    <RouterProvider router={router} />
  );
}