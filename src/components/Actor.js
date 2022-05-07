import React from 'react';

import { Wrapper,Image } from './Actor.styles';

const Actor = ({name,character,imageURL}) => {
  return (
    <div style={{'borderRadius': '20px', 'backgroundColor':'black'}} className='col p-2 bg-dark border border-dark m-3 '>
        <Wrapper>
          <h3>{name}</h3>
          <Image style={{'borderRadius': '20px', 'backgroundColor':'black', 'maxWidth':'90px'}} src={imageURL} alt='actor-thumb'/>
          <p>{character}</p>
        </Wrapper>

    </div>
  )
}

export default Actor