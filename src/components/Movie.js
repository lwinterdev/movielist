import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../config';

import NoImage from '../Images/no_image.jpg'
import Actor from './Actor';
import Grid from './Grid';

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
        
        <div className='row cointainer-fluid'>
            <div style={{'display':'flex','justifyContent':'center'}} className='col'>
                <img  style={{'maxWidth':'450px','borderRadius': '40px'}} 
                    className='img-fluid rounded p-2' src={
                        movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path 
                        : 
                        NoImage} 
                        alt="movie-poster"
                />
            </div>
            
            
            <div className='col'>
            
                <h1 className='p-4'>{movie.title}</h1>
            
                {movie.runtime > 0 && <div>
                    <h3 style={{'borderRadius': '20px', 'backgroundColor':'black'}} className='text-info'>Runtime</h3>
                    <p className='col '>{movie.runtime} Minutes</p>
                    </div> }
                
                
                <h3 style={{'borderRadius': '20px', 'backgroundColor':'black'}} className='col p-1 text-info'>Plot</h3>
                <p className='col-m ' >{movie.overview}</p>
                

                {/*show directors */}
                <h3 style={{'borderRadius': '20px', 'backgroundColor':'black'}} className='col text-info'>Directing</h3>
                {movie.directors && movie.directors.map(director => (
                    <div  key={director.id } style={{'borderRadius': '20px'}} className='p-1'>
                        <h3  className='p-1'>{director.name}</h3>
                        { director.profile_path ?
                            <img style={{'borderRadius': '20px'}} src={`http://image.tmdb.org/t/p/w92/${director.profile_path}`} alt="director"/>
                            :
                            <div style={{'borderRadius': '20px','minHeight':'140px' ,'display':'flex','justifyContent':'center', 'alignItems':'center'}} 
                                className='bg-secondary'>
                                No Image
                            </div>
                        }   

                    </div>
                ))}
                

                <h3 style={{'borderRadius': '20px', 'backgroundColor':'black'}} className='col text-info'>Released</h3>{movie.release_date ?
                    <p className='col'>{movie.release_date}</p>
                        :
                    <p>Not Yet Released</p>}
                
                </div>
                
                <div >
                    {/*show actors */}
                    <Grid header={'Actors'}>
                        { movie.actors &&
                          movie.actors.map(actor =>(
                            <Actor key={actor.credit_id}
                                   name = {actor.name}
                                   character = {actor.character}
                                   imageURL = {actor.profile_path ? `http://image.tmdb.org/t/p/w92/${actor.profile_path}`
                                   :
                                   NoImage}
                            />
                        ))}
                    </Grid>
                </div>
        
                
                <h3 style={{'borderRadius': '20px', 'backgroundColor':'black'}} className='text-info'>Rating</h3>
                <div className='bg-dark'>{movie.vote_average}</div>
            </div>
        
    </div>
  )
}

export default Movie