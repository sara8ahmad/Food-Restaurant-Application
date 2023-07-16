
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../Cart/EmptyCart";
import store from "../../store";
import { cardTotalPrice, clearCart } from "../Cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { fetchAddress } from "../User/userSlice";
import { useState } from "react";


// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(true);
  console.log(withPriority);
  
  const navigation = useNavigation;
  const isSubmitting = navigation.state === 'submitting';
  const cart = useSelector( state => state.cart.cart);
  const formErrors = useActionData();
  const dispatch = useDispatch();

  const {username , address, status:addressStatus , position ,error:addressError , status} = useSelector(
    (state) => state.user
  )
 const totalPrice = useSelector(cardTotalPrice)

  if (!cart.length) return <EmptyCart />

  return (
    <div className="px-4 py-4 max-w-2xl">
      <h2 className="my-4 font-semibold tracking-wide text-lg ">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="flex flex-col gap-2 mb-3 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <div className="grow">
          <input className="input w-full" defaultValue={username} type="text" name="customer" required />
          </div>
        </div>

        <div  className="flex flex-col gap-2 mb-3 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
          <div>
            <input className="input w-full" type="tel" name="phone" required />
          </div>
          {formErrors?.phone && <p className="bg-red-100 text-red-700 p-1 text-sm mt-2">{formErrors.phone}</p> }
          </div>
        </div>

        <div  className="flex flex-col gap-2 mb-3 sm:flex-row sm:items-center relative">
          <label className="sm:basis-40">Address</label>
        
          <div className="grow">
            <input className="input w-full" defaultValue={address} type="text" name="address" required />
            {
            addressStatus === "error" && (
              <p className="bg-red-100 text-red-700 p-1 text-sm mt-2">{addressError}</p>
            )
           }
          </div>
          { !position.latitude && !position.longitude && (
          <button
           className="absolute top-8 right-0 sm:top-[2px] sm:right-0 py-1 px-5 bg-red-800 
           rounded-full text-white hover:bg-red-600 transition-colors duration-300 tracking-wide" 
           onClick={(e)=> {
           e.preventDefault() 
           dispatch(fetchAddress())}}> Get Postion</button>)
           }
           
          
          </div>
        

        <div className=" flex gap-2 items-center mt-5 mb-12">
          <input className="h-4 w-4  accent-red-200
          focus:ring focus:ring-red-400 focus:outline-none focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
             onChange={(e) => setWithPriority(e.target.checked)}
          />
        
          <label htmlFor="priority" className="tracking-wide font-semibold">Want to yo give your order priority?</label>
        </div>

        <div className="my-5">
          <Button disabled = {isSubmitting}>{isSubmitting ? "Placing Order" : `Order Total : ${formatCurrency(totalPrice)}`}</Button>
        </div>

        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <input type="hidden" name="position"
         value={ position.latitude && position.longitude ? `${position.longitude} ,${position.latitude}`:"" } />
      </Form>
    </div>
  
  );
}


export async function action({ request }){

  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data ,
    cart: JSON.parse(data.cart),
    
  }
  console.log(order);

  const errors ={};

  if(!isValidPhone(order.phone)){
     errors.phone = " Enter a vaild Phone Number ";
  } 
  if(Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);
  store.dispatch(clearCart());
  
  return redirect(`/order/${newOrder.id}`);
  

}

export default CreateOrder;
