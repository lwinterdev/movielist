import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Logo from '../Images/movie-db-logo.svg'


const Header = () => {

                 
  return (
    
    <div className='bg-dark text-light p-1 sticky-top display-1 '>
      <h3><Link style={{ textDecoration: 'none' }} className='p-2 text-warning' to="/">Home</Link>
      All Images and API provided by
      <a href='https://www.themoviedb.org/'>
        <img className='p-4' style={{ height: 100, width: 200 , paddingLeft: 10}} src={Logo}/>
      </a>
      </h3>
    </div>
    
  )
}

export default Header