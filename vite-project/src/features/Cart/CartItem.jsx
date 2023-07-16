
import { formatCurrency } from "../../utils/helpers";
import DeletItem from "./DeletItem";
import UpdateQuantity from "./UpdateQuantity";


function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  

  return (
    <li className="py-3">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <div className="flex items-center">
        <UpdateQuantity pizzaId={pizzaId} />
        <DeletItem pizzaId={pizzaId} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
