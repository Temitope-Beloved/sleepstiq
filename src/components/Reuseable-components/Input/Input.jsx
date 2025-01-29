import React from 'react'
import './Input.css'
const Input = ({type, className}) => {
  return (
    <>
    <input type={type} className={`${className}`}/>
    </>
  )
}

export default Input