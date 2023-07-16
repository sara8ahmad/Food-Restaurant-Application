import { useState } from 'react';
import Button from '../../ui/Button';
import {useDispatch} from "react-redux"
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if(!username) return;

    dispatch(updateName(username))
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='my-6 text-stone-400'>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='w-72 h-10 p-4 input mb-8 bg-white'
      />

      {username !== '' && (
        <div>
          <Button>Start Ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
