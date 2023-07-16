import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, getCurrentQuantity, increaseQuantity } from './cartSlice';

const UpdateQuantity = ({pizzaId}) => {

  const cartQuantity = useSelector(getCurrentQuantity(pizzaId))


    const dispatch = useDispatch();
  return (
    <div className='mx-3'>
        <button className = 'px-2.5 py-1 md:px-3.5 md:py-2 text-sm font-bold bg-red-800 rounded-full hover:bg-red-600 text-white transition-colors duration-300 tracking-wide'
   onClick={()=> dispatch(increaseQuantity(pizzaId))}>+</button>
        <span className='mx-3 text-xl font-semibold text-stone-400'>{cartQuantity}</span>
        <button className = 'px-2.5 py-1 md:px-3.5 md:py-2 text-sm font-bold bg-red-800 rounded-full hover:bg-red-600 text-white transition-colors duration-300 tracking-wide'
   onClick={()=> dispatch(decreaseQuantity(pizzaId))}>-</button>
    </div>
  )
}

export default UpdateQuantity