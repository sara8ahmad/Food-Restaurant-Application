import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./ui/Home"; 
import Erorrr from "./ui/Errorr";
import Menu , { loader as menuLoader } from "./features/Menu/Menu";
import Order , { loader as orderLoader } from "./features/Order/Order";
import Cart from "./features/Cart/Cart";
import CreateOrder, { action as createOrderAction } from "./features/Order/CreateOrder";
import AppLayout from './ui/AppLayout';



const App = () => {


const router = createBrowserRouter([

  {
  
    element: <AppLayout />,
    errorElement: <Erorrr />,
    
    children:[

      {
        path: "/",
        element: <Home />,
        
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Erorrr />,
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
        errorElement: <Erorrr />,

      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Erorrr />,

      }

    ]
    
  }

  
]);



  return (
    <RouterProvider router={router}  />
  )
}

export default App