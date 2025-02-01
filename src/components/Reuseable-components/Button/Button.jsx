import React from 'react'
import "./Button.css"
const Button = ({children, className}) => {
  return (
   <>
   <button className={`${className} btn `}>{children}</button>
   </> 
   
  )
}

export default Button