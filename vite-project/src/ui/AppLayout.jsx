import React from 'react'
import Header from "./Header";
import CartOverview from "../features/Cart/CartOverview";
import {Outlet, useNavigation} from "react-router-dom";
import Loader from './Loader';

const AppLayout = () => {

  const navigation = useNavigation();
  
  const isLoading = navigation.state === "loading";


  return (
    <div className='grid h-screen grid-rows-[auto_1fr_auto]'>
      {
        isLoading && <Loader />
      }

        <Header />
      <div className='overflow-scroll overflow-x-hidden'>
        <main className='w-auto mx-auto'>  
             <Outlet />
        </main> 
      </div>
        <CartOverview />
    </div>

    
  )
}

export default AppLayout