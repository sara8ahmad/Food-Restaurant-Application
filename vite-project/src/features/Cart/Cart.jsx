import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useSelector ,useDispatch } from 'react-redux';
import { clearCart } from './cartSlice';
import EmptyCart from './EmptyCart';


function Cart() {
  

  const userName = useSelector(
    (state) => state.user.username 
  );
  const cart = useSelector(
    (state) => state.cart.cart
  );

  const dispatch = useDispatch();
  
  if(!cart.length) return (<EmptyCart />)

  return (
    <div className='px-3 py-4'>
      <Link className='text-red-400 hover:text-red-200' to="/menu">&larr; Back to menu</Link>

      <h2 className='mt-7'>Your Cart, {userName}</h2>
      <ul className='divide-y divide-stone-200 border-b' >
        {
          cart.map(
            (item) => (<CartItem key={item.pizzaId} item={item} />)
          )
        }
      </ul>

      <div className='mt-7 space-x-2'>
        <Button to="/order/new">Order pizzas</Button>
        <button onClick={()=>dispatch(clearCart())} className='px-4 py-2 border-2 border-stone-300 hover:bg-stone-200 rounded-full transition-colors
         duration-300 tracking-wide font-semibold'>Clear Cart</button>
      </div>
    </div>
  );
}

export default Cart;
