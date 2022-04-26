import React from 'react'

const Actor = ({name,character,imageURL}) => {
  return (
    <div className='col p-2'>
       
        <h3>{name}</h3>
        <p>{character}</p>

    </div>
  )
}

export default Actor