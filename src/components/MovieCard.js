import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieCard = (props) => {
  return (
    <div className='container text-light bg-secondary'>
    
        <h1 className='bg-info'>{props.title}</h1>
            <h2 className='bg-secondary'>{props.director}</h2>
            <h2>{props.releasDete}</h2>
            <h2>{props.ranking}</h2>
            <p>{props.plotSynopsis}</p>
    </div>
  )
}

export default MovieCard