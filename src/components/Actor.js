import React from 'react'

const Actor = ({name,character,imageURL}) => {
  return (
    <div className='col p-2 bg-secondary border border-info m-3 '>
       
        <h3 className=''>{name}</h3>
        <p>{character}</p>

    </div>
  )
}

export default Actor