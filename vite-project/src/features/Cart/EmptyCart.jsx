import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className='px-3 py-4'>
      <Link className='text-red-400 hover:text-red-200' to="/menu">&larr; Back to menu</Link>


      <p className='mt-7 font-bold text-xl'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
