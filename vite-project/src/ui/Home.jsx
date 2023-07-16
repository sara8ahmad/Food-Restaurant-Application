import CreateUser from "../features/User/CreateUser"
import Button from "./Button";
import { useSelector } from "react-redux";

function Home() {

  const userName = useSelector(
    (state) => state.user.username 
  )
  return (
  
    <div className="text-center 
    bg-[url('https://www.mymichaelsplace.com/files/banner/michaels-place-banner-1.jpg')] bg-cover h-screen w-screen ">
      <h1 className="text-stone-100 text-3xl font-semibold pt-[100px] italic ">
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>
      {
        userName? <div className="my-10"><Button to = {"/menu"} >Continue Ordering, {userName} </Button></div> : <CreateUser />
      }
      
    </div>
  );
}

export default Home;
