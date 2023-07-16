
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { cardTotalPrice, cardTotalQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {

  const cartPrice = useSelector(cardTotalPrice)
  const cartQuantity = useSelector(cardTotalQuantity)

 if(!cartQuantity) return null;

  return (
    <div className="bg-red-900 text-white uppercase flex items-center justify-between p-2">
      <p className="text-stone-200 font-semibold space-x-4 ">
        <span>{cartQuantity}</span>
        <span> {formatCurrency(cartPrice)} pizzas</span>
      </p>
      <Link className="text-sm p-2 bg-stone-900 rounded-lg hover:bg-stone-700 transition-all duration-300" to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
