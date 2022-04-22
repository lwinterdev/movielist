import React, { useEffect } from 'react';

//components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import { SearchBar } from './SearchBar';
import Button from './Button';

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL, API_KEY } from '../config';
import 'bootstrap/dist/css/bootstrap.min.css';

//Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';


const Home = () => {

    const {state,loading,error,setSearchTerm,searchTerm,setIsLoadingMore} = useHomeFetch();

    if (error){
      return <div>Something went wrong</div>
    }

    return (
      <div className='bg-dark text-light'>

        {!searchTerm && state.results[0] ? 
          <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    />
        : null}        
      
        <SearchBar setSearchTerm={setSearchTerm}/>
        
        <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
          {state.results.map(movie =>(
            <Thumb 
              key={movie.id}
              clickable
              image={movie.poster_path && IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path }
              movieId = {movie.id}
              
            />
          ))}
        
        </Grid>
      
        <Spinner/>
        
        {state.page < state.total_pages && (
          <Button text={'Load More'} callback={() =>setIsLoadingMore(true)}/>
        )}
       
      </div>
  )
}

export default Home