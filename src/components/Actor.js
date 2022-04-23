import React from 'react'

const Actor = ({name,character,imageURL}) => {
  return (
    <div>
        <img scr={imageURL} alt="actor"></img>
        <h3>{name}</h3>
        <h4>{character}</h4>

    </div>
  )
}

export default Actor