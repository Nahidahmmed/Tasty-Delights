import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main.jsx';
import Home from './Home/Home.jsx';
import Blog from './Components/Blog/Blog';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Chefs from './Home/Chefs';
import ChefRecipes from './Components/ChefRecipes/ChefRecipes';
import AuthProvider from './Providers/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ErrorPage from './Components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/chefs',
        element: <Chefs></Chefs>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "/chef/:id",
        element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-10-surver-nahidahmmed.vercel.app/chefs/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
