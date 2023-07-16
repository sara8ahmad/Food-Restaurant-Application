import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantity  } from "../Cart/cartSlice";
import DeletItem from "../Cart/DeletItem";
import UpdateQuantity from "../Cart/UpdateQuantity";

function MenuItem({ pizza }) {
  
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantity(id));
  const inCart = currentQuantity > 0;
  
  
  

 function handleAddItem() {
 
  const newItem = 
    {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem))
  }


  return (
    <div key={id} className="group">
       <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg
        bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">

         <img src={imageUrl} alt="" 
         className={`h-full w-full object-cover object-center group-hover:opacity-75 bloc ${soldOut? 
          "opacity-70 grayscale" : ""} `} />
           </div>
            <div className="flex flex-col">
              <div>

               <h3 className="mt-4 text-lg text-gray-100 font-semibold">{name}</h3>
               <p className="capitalize italic text-xs text-stone-300">{ingredients.join(', ')}</p>

               </div>

                <div className="flex flex-col"> 
                <p className="mt-1 text-lg text-stone-100 font-semibold capitalize">
                  {!soldOut ? formatCurrency(unitPrice) : <span className="line-through">Sold out</span>} 
                 </p> 
                 <div>

                 {inCart && <div className="flex items-center justify-between"> 
                  <UpdateQuantity pizzaId={id} />
                  <DeletItem pizzaId={id} /> 
                  </div>}
  
                { !soldOut && !inCart && (<Button onClick={handleAddItem} >Add To Card</Button>) }
               
              
                 </div>
                 </div> 
            </div>
          </div>  )}
      
 
export default MenuItem;
