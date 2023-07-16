import { useNavigate, useRouteError } from 'react-router-dom';

function Errorr() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <button className='text-red-400 hover:text-red-200' onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Errorr;
