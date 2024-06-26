import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Products from "../Pages/Products/Products";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Dashboard/Dashboard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UserManage from "../Dashboard/UserManage/UserManage";
import Profile from "../Dashboard/Profile/Profile";
import AddProducts from "../Dashboard/AddProducts/AddProducts";
import EditProducts from "../Dashboard/EditProducts/EditProducts";
import EditProduct from "../Dashboard/EditProducts/EditProduct";
import UserContacts from "../Dashboard/UserContacts/UserContacts";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/products',
        element: <Products></Products>
      },
    
      {
        path:'/contact',
        element: <Contact></Contact>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },

{
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'profile',
        element: <Profile></Profile>
      },

      {
        path: 'usersmanagement',
        element: <UserManage></UserManage>
      },
      {
        path: 'addproducts',
        element: <AddProducts></AddProducts>
      },
      {
        path: 'editproducts',
        element: <EditProducts></EditProducts>
      },
      {
        path: 'editproduct/:id',
        element: <EditProduct></EditProduct>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: 'usercontacts',
        element: <UserContacts></UserContacts>
      },
   
    ]
  }
]);