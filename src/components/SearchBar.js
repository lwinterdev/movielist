import React from 'react';
import { useState,useEffect,useRef } from 'react';
import searchIcon from '../Images/search-icon.svg';

export const SearchBar = ({setSearchTerm}) => {
    const [state,setState] = useState('');
   
    const initial = useRef(true);

 

    useEffect(() => {
        if (initial.current) {
          initial.current = false;
          return;
        }
    
        const timer = setTimeout(() => {
          setSearchTerm(state);
        }, 500);
    
        return () => clearTimeout(timer);
      }, [setSearchTerm, state]);
    

    return (

    <div className='sticky-top bg-dark p-2' style={{'top': '100px'}}>
        <img src={searchIcon} alt='search-icon'></img>
        <input type = "text"
               placeholder='Search Movie'
               onChange={event => setState(event.currentTarget.value)}
               value = {state}
        />
    </div>
  )
}
