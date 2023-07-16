import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice,id } = item;

  return (
    <li key={id} className="py-5 flex flex-wrap items-center justify-between">
      
        <p className="font-bold tracking-wider">
          <span>{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency (totalPrice)}</p>
      
    </li>
  );
}

export default OrderItem;
