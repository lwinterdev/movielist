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
        <div>
        <div style={{'maxWidth':'400px'}} className='row'>
            <img src={movie.poster_path && IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path } alt="movie-poster"/>
        </div>
        
        
        <div className='col'>
           
            
            {movie.runtime > 0 && <div>
                <h3 className='text-info'>Runtime</h3>
                <p className='col '>{movie.runtime} Minutes</p>
                </div> }
            
            
            <h3 className='col p-1 text-info'>Plot</h3>
            <p className='col ' >{movie.overview}</p>
            
            
            <h3 className='col text-info'>Directing</h3>
            {movie.directors && movie.directors.map(director => (
                <div className='p-4'>
                    <div key={director.id }className='p-2 '>{director.name}</div>
                    { director.profile_path &&
                    <img classname="p-4" src={`http://image.tmdb.org/t/p/w92/${director.profile_path}`}/>
                }
                </div>
            ))}
            

            <h3 className='col text-info'>Released</h3>{movie.release_date ?
                <p className='col'>{movie.release_date}</p>
                    :
                <p>Not Yet Released</p>}
            

            <h3 className='col text-info'>Actors</h3>
            <div className='row'>
                
            
            {movie.actors && movie.actors.map(actor => (
            <div className='col m-4'>

                <h3>{actor.name}</h3>
                { actor.profile_path &&
                    <img classname="p-4" src={`http://image.tmdb.org/t/p/w92/${actor.profile_path}`}/>
                }
                <p>{actor.character}</p>
                </div>

            ))}
            </div>
    
            
            <h3 className='text-info'>Rating</h3>
            <div className='bg-dark'>{movie.vote_average}</div>
            </div>
            </div>
    </div>
  )
}

export default Movie