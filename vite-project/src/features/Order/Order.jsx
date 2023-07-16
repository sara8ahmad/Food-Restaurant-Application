import OrderItem from "./OrderItem";
import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";



function Order() {
  
  const order = useLoaderData();

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);



  return (
    <div className="m-6 space-y-8">
      <div className="mt-5 flex items-center justify-between flex-wrap">
        <h2 className="font-bold tracking-wider text-2xl">Order #{id} Status</h2>

        <div className="flex gap-2 my-5">
          {priority && <span  className="bg-red-500 rounded-full px-3 py-2 uppercase text-white text-sm">Priority</span>}
          <span className="bg-green-500 rounded-full px-2 py-2 uppercase text-white text-sm">{status} order</span>
        </div>
      </div>

      <div className="bg-stone-200 p-5 flex flex-wrap justify-between">
        <p className="font-semibold text-lg">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="tracking-wide text-sm">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className="divide-y divide-stone-300">
        {
          cart.map(
            (item) => (<OrderItem item={item} key={item.pizzaId} />)
          )
        }
      </ul>

      <div className="bg-stone-200 space-y-2 p-5">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency (priorityPrice)}</p>}
        <p className="font-semibold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
