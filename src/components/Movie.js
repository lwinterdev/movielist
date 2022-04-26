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
    <div className='bg-dark text-light container-fluid'>
        
        <div style={{'maxWidth':'400px'}} className='row'>
            <img src={movie.poster_path && IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path } alt="movie-poster"/>
        </div>
        
        
        <div className='col'>
        <h1 className='col'>{movie.title}</h1>
        <div className='col'>{movie.tagline}</div>
        
        
        {movie.runtime > 0 && <div>
            <h3>Runtime</h3>
            <p className='col'>{movie.runtime} Minutes</p>
            </div> }
        
        
        <h3 className='col p-1'>Plot</h3>
        <p className='col' >{movie.overview}</p>
        
        
        <h3 className='col'>Directing</h3>
        {movie.directors && movie.directors.map(director => (
            <div key={director.id }className='p-2'>{director.name}</div>
        ))}
        

        <h3 className='col'>Released</h3>{movie.release_date ?
            <p className='col'>{movie.release_date}</p>
                :
            <p>Not Yet Released</p>}
        

        <h3 className='col'>Actors</h3>
        <div className='row'>
            
        
        {movie.actors && movie.actors.map(actor => (
          
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                && `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                
            }
          />
        ))}
        </div>
  
        
        <h3>Rating</h3>
        <div>{movie.vote_average}</div>
        </div>
        
    </div>
  )
}

export default Movie