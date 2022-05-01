import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

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
        <div style={{'display':'flex','justifyContent':'center'}} className='row'>
            <img  style={{'maxWidth':'600px','borderRadius': '30px'}} className='img-fluid rounded' src={movie.poster_path && IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path } alt="movie-poster"/>
        </div>
        
        
        <div className='col'>
           
            <h1 className='p-4'>{movie.title}</h1>

            {movie.runtime > 0 && <div>
                <h3 className='text-info'>Runtime</h3>
                <p className='col '>{movie.runtime} Minutes</p>
                </div> }
            
            
            <h3 className='col p-1 text-info'>Plot</h3>
            <p className='col ' >{movie.overview}</p>
            
            
            <h3 className='col text-info'>Directing</h3>
            {movie.directors && movie.directors.map(director => (
                <div  key={director.id } className='p-1'>
                    <h3  className='p-1'>{director.name}</h3>
                    { director.profile_path &&
                        <img style={{'borderRadius': '20px'}} src={`http://image.tmdb.org/t/p/w92/${director.profile_path}`} alt="director"/>
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
                <div key={actor.credit_id} className='col m-2'>

                    <h5 style={{'minHeight':'70px'}}>{actor.name}</h5>
                    { actor.profile_path &&
                        <img  style={{'borderRadius': '20px'}} src={`http://image.tmdb.org/t/p/w92/${actor.profile_path}`} alt="actor"/>
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