import { useLoaderData } from "react-router-dom";
import  {getMenu} from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {

  const menu = useLoaderData();
  

  return (
    <div className="bg-black w-full">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-4 sm:w-full lg:max-w-7xl lg:px-8">

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
  
    {
      menu.map(
        (pizza) => (<MenuItem pizza={pizza} key={pizza.id} />)
      )
    }

  </div>
  </div>
  </div>);
}

export async function loader(){
        
  const menu = await getMenu();
  return menu;
}

export default Menu;
