import React from 'react'
import {Link} from "react-router-dom";
import SearchOrder from '../features/Order/SearchOrder';
import UserName from '../features/User/UserName';

const Header = () => {
  return (
    <header className=' bg-red-800 py-3 px-4 flex justify-between items-center font-bold '>
        <Link className='tracking-widest italic text-xl text-white flex' to="/">Pizzanoo<img className="h-8 w-[50px]" 
        src="https://th.bing.com/th/id/R.17f5aa8e0e7b524bb3bdc9b5077ceb4d?rik=o26d79eue22Nkw&pid=ImgRaw&r=0" 
        alt="Your logo"></img></Link>
        <SearchOrder />
        <UserName />
    </header>
  )
}

export default Header