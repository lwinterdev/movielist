import React from 'react'

const Button = ({text,callback}) => {
  return (
    <button className='btn-secondary p-4 m-4' onClick={callback}>{text}</button>
  )
}

export default Button