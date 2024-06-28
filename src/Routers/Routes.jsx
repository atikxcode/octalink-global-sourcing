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
import PrivateRoutes from "../Pages/PrivateRoutes/PrivateRoutes";
import AdminRoute from "../Pages/PrivateRoutes/AdminRoute";





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
    element:  <PrivateRoutes><AdminRoute><Dashboard></Dashboard></AdminRoute></PrivateRoutes>,
    children: [
      {
        path: 'profile',
        element: <PrivateRoutes><AdminRoute><Profile></Profile></AdminRoute></PrivateRoutes>
      },

      {
        path: 'usersmanagement',
        element: <PrivateRoutes><AdminRoute><UserManage></UserManage></AdminRoute></PrivateRoutes>
      },
      {
        path: 'addproducts',
        element: <PrivateRoutes><AdminRoute><AddProducts></AddProducts></AdminRoute></PrivateRoutes>
      },
      {
        path: 'editproducts',
        element: <PrivateRoutes><AdminRoute><EditProducts></EditProducts></AdminRoute></PrivateRoutes>
      },
      {
        path: 'editproduct/:id',
        element: <PrivateRoutes><AdminRoute><EditProduct></EditProduct></AdminRoute></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: 'usercontacts',
        element: <PrivateRoutes><AdminRoute><UserContacts></UserContacts></AdminRoute></PrivateRoutes>
      },
   
    ]
  }
]);