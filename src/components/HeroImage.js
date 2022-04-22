import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const HeroImage = ({title,image}) => {
  return (
    <div className='container'>
      
        <img src={image} style={{'height':'50'}} className='bg-dark row' alt='hero'></img>
        <h1 className='row'>{title}</h1>
    </div>

  )
}

export default HeroImage