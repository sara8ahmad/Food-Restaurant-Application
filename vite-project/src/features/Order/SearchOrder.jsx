import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchOrder = () => {
 
    const [query , setQuery] =useState("");
    const navigate = useNavigate();
    const handleSubmite = (e) =>{
        e.preventDefault();
        navigate(`/order/${query}`);
        setQuery("");

   }

   
  return (
    <form onSubmit={handleSubmite}>
        <input className='w-40 rounded-full px-4 py-2 text-sm transition-all duration-300 focus:outline-none
        bg-white focus:outline-yellow-100 sm:w-64 sm:focus:w-72'
         type='text' placeholder='Search Order' value={query} onChange={ (e) => setQuery(e.target.value)} />
    </form>
  )
}

export default SearchOrder