import React from 'react'
import { useSelector } from 'react-redux';




const UserName = () => {

  const userName = useSelector(
    (state) => state.user.username 
  )

  if (!userName) return <p></p>;

  

  return (
    <div className='text-lg italic text-white tracking-wider font-semibold hidden md:block'>{userName}</div>
  )
}

export default UserName;