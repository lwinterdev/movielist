import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

//components
import Grid from './Grid';
import Spinner from './Spinner';
import Actor from './Actor';

//hook
import { useMovieFetch } from '../hooks/useMovieFetch';
import { useParams } from 'react-router-dom';

const Movie = () => {
    const {movieId} = useParams();
    const {state: movie,loading,error} = useMovieFetch(movieId);
    console.log(movie);

    if (error){
        return(
            <div>Something went wrong</div>
        )
    }
    
    return (
    <div className='bg-dark text-light'>
        <div style={{'minHeight':'0vh'}} ></div>
        
        <img src={movie.poster_path && IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path } alt="movie-poster"/>
        
        <h1>{movie.title}</h1>
        <div>{movie.tagline}</div>
        
        <h3>Plot</h3>
        <p>{movie.overview}</p>
        
        <h3>Actors</h3>
        <div>
 
        </div>
  
        <h3>Rating</h3>
        <div>{movie.vote_average}</div>
        

    
        
    </div>
  )
}

export default Movie