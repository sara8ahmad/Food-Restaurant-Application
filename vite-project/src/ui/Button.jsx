import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children , disabled ,to ,onClick}) => {
    const className = 'px-4 py-3 text-white bg-red-800 rounded-lg italic hover:bg-red-600 transition-colors duration-300 tracking-wide font-semibold'
  
if(to)
    return(
     <Link to={to} className={className}>{children}</Link>
    )
  
    if(onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={className}>
          {children}
      </button>
    )
    
  return (
    <button disabled={disabled} className={className}>
        {children}
    </button>
  )
}

export default Button